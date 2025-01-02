"use client";
import React, { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import tick from "../public/image 368.png";

// Loader Component
const GrayDotLoader: React.FC = () => {
  return (
    <div className="flex justify-center items-center space-x-1 p-4">
      <div className="animate-pulse w-1 h-1 bg-gray-400 rounded-full"></div>
      <div className="animate-pulse w-1 h-1 bg-gray-400 rounded-full delay-150"></div>
      <div className="animate-pulse w-1 h-1 bg-gray-400 rounded-full delay-300"></div>
      <div className="animate-pulse w-1 h-1 bg-gray-400 rounded-full delay-500"></div>
    </div>
  );
};

// Define types for Search Result
interface SearchResult {
  appId: string;
  title: string;
  developer: string;
  icon: string;
}

// Modal Component
const BoxModel: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [selectedApp, setSelectedApp] = useState<string | null>(null);
  const [reviews, setReviews] = useState<any[]>([]); // Replace `any` with a proper type if you know the structure of reviews
  const [isFetchingReviews, setIsFetchingReviews] = useState<boolean>(false);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const handleSearch = async () => {
      if (!search) return;

      setIsSearching(true);
      setError(null);

      try {
        if (searchTerm === "") {
          const response = await fetch(
            `${API_BASE_URL}/search/${encodeURIComponent(search)}`
          );
          if (!response.ok) throw new Error("Search failed");

          const data: SearchResult[] = await response.json();
          setSearchResults(data);
        }
      } catch (err) {
        setError("Failed to search apps. Please try again.");
        console.error(err);
      } finally {
        setIsSearching(false);
      }
    };

    handleSearch();
  }, [search]);

  const ProductNavigation=(appId:string)=>{
   const otherwindow= window.open(`http://localhost:5174/prodai/${appId}`,"_blank");
   otherwindow?.postMessage(selectedApp);
    }

  const handleAppSelect = async (app: SearchResult, appId: string) => {
    setSearchTerm(`${app.title}-${app.developer}`);
    setSearch(`${app.title}-${app.developer}`);
    setSearchResults([]);
    setSelectedApp(app.appId);
    setIsFetchingReviews(true);
    setError(null);

    try {
      const scrapeResponse = await fetch(`${API_BASE_URL}/scrape`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ appId }),
      });

      if (!scrapeResponse.ok) throw new Error("Failed to start scraping");

      const { jobId }: { jobId: string } = await scrapeResponse.json();

      // Poll for job completion
      const checkStatus = async () => {
        const statusResponse = await fetch(`${API_BASE_URL}/scrape/${jobId}/status`);
        const statusData = await statusResponse.json();

        if (statusData.status === "completed") {
          const reviewsResponse = await fetch(`${API_BASE_URL}/reviews/${app.appId}`);
          const reviewsData = await reviewsResponse.json();
          setReviews(reviewsData);
          setIsFetchingReviews(false);
          setTimeout(()=>ProductNavigation(app.appId),1000);
        } else if (statusData.status === "failed") {
          throw new Error(statusData.error_message || "Failed to fetch reviews");
        } else {
          setTimeout(checkStatus, 2000);
        }
      };

      checkStatus();
    } catch (err) {
      setError("Failed to fetch reviews. Please try again.");
      setIsFetchingReviews(false);
    }
  };

  return (
    <div className="w-[90vw] mx-auto bg-gradient-to-r from-[#FFD1C813] to-[#4318FF08] h-[698px] rounded-[32px] flex items-center justify-between">
      <div className="flex flex-col justify-around h-[80%]">
        <div>
          <p className="font-geologica ml-[5%] text-[#1B2559] font-semibold text-[32px]">
            Connect Your Google Play Store Reviews
          </p>
        </div>
        <div>
          <div className="flex ml-[5%] justify-between w-[626px] h-[61px] items-center px-3 border border-[#EFF0F6] rounded-[20px] bg-white">
            <input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              type="text"
              placeholder='Enter Your Play Store App Name - ex: “Zomato”'
              className="outline-none w-[500px] placeholder:text-[#000000B2] placeholder:font-medium placeholder:text-[17px]"
            />
            <KeyboardArrowDownIcon />
          </div>
          {searchResults.length > 0 && (
            <div className="w-[626px] ml-[5%] px-4 py-1 bg-white rounded-[20px] border border-[#EFF0F6] shadow-md max-h-[250px] overflow-y-auto">
              {searchResults.map((app) => (
                <div
                  onClick={() => handleAppSelect(app, app.appId)}
                  key={app.appId}
                  className="flex cursor-pointer hover:bg-[#F2F7FF] hover:rounded-[11px] px-2 items-center gap-2 py-2"
                >
                  <img src={app.icon} alt={app.title} style={{ width: 20, height: 20 }} />
                  <span className="text-[14px] hover:font-bold">
                    {app.title} - {app.developer}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        {searchTerm !== "" && (
          <div className="w-[600px] ml-[5%] flex flex-col gap-8">
            <div className="flex justify-between">
              <p className="text-[#4318FF] text-[14px]">Fetching Google Reviews</p>
              {isFetchingReviews ? <GrayDotLoader /> : <img src={tick} alt="img" className="w-[28px] h-[20px]" />}
            </div>
            <div className="flex justify-between">
              <p className="text-[#4318FF] text-[14px]">Aggregating, analyzing and categorizing reviews</p>
              {isFetchingReviews ? <GrayDotLoader /> : <img src={tick} alt="img" className="w-[28px] h-[20px]" />}
            </div>
            <div className="flex justify-between">
              <p className="text-[#4318FF] text-[14px]">ProdAI Insights</p>
              {isFetchingReviews ? <GrayDotLoader /> : <img src={tick} alt="img" className="w-[28px] h-[20px]" />}
            </div>
          </div>
        )}

        <div className="flex gap-1 items-start">
          <div className="bg-[#4318FF] w-[80px] h-[2px] mt-3"></div>
          <div className="flex flex-col gap-2">
            <p className="text-[#4318FF] font-geologica text-[16px] font-normal">See Prodloop In Action</p>
            <div className="text-black font-sans font-light text-[14px] flex flex-col gap-1">
              <p>Get data from your Google Play Store</p>
              <p>prodAI generates rich metadata and categorisation relevant to business context</p>
              <p>Use natural language questions to get insights</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[480px] shadow-[#4318FF1A] mr-[5%] shadow-md h-[551px] bg-[#FFFFFF] rounded-[28px]"></div>
    </div>
  );
};

export default BoxModel;
