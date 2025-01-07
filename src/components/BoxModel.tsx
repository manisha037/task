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
  const [isFetchingReviews, setIsFetchingReviews] = useState<boolean>(false);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const API_SCRAPE_URL = import.meta.env.VITE_API_SCRAPE_URL;

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

  const handleAppSelect = async (app: SearchResult, appId: string) => {
    setSearchTerm(`${app.title}-${app.developer}`);
    setSearch(`${app.title}-${app.developer}`);
    setSearchResults([]);
    setSelectedApp(app.appId);
    setIsFetchingReviews(true);
    setError(null);

    try {
      const scrapeResponse = await fetch(`${API_SCRAPE_URL}/scrape`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ app_id: appId }),
      });

      if (!scrapeResponse.ok) throw new Error("Failed to start scraping");

      const { jobId }: { jobId: string } = await scrapeResponse.json();

      // Poll for job completion
      const checkStatus = async () => {
        const statusResponse = await fetch(`${API_SCRAPE_URL}/scrape/${jobId}/status`);
        const statusData = await statusResponse.json();

        if (statusData.status === "completed") {
          setIsFetchingReviews(false);
        } else if (statusData.status === "failed") {
          throw new Error(statusData.error_message || "Failed to fetch reviews");
        } else {
          setTimeout(checkStatus, 2000);
        }
      };

      checkStatus();
    } catch (err) {
      setError("Failed to fetch reviews. Please try again.");
      console.log("Failed to fetch reviews. Please try again.");
      setIsFetchingReviews(true);
    }
  };

  return (
    <div className="w-full px-4 md:px-8 mx-auto bg-gradient-to-r from-[#FFD1C813] to-[#4318FF08] h-auto md:h-[698px] rounded-[32px] flex flex-col md:flex-row items-center justify-between">
      {/* Left Section */}
      <div className="flex flex-col w-full md:w-[60%] space-y-6">
        <p className="font-geologica text-[#1B2559] font-semibold text-[24px] md:text-[32px] text-center md:text-left">
          Connect Your Google Play Store Reviews
        </p>
        <div>
          <div className="flex justify-between items-center w-full md:w-[626px] h-[50px] md:h-[61px] px-3 border border-[#EFF0F6] rounded-[20px] bg-white">
            <input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              type="text"
              placeholder='Enter Your Play Store App Name - ex: “Zomato”'
              className="outline-none w-full placeholder:text-[#000000B2] placeholder:font-medium placeholder:text-[14px] md:text-[17px]"
            />
            <KeyboardArrowDownIcon />
          </div>
          {searchResults.length > 0 && (
            <div className="w-full md:w-[626px] px-4 py-1 bg-white rounded-[20px] border border-[#EFF0F6] shadow-md max-h-[200px] overflow-y-auto">
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
          <div className="w-full md:w-[600px] flex flex-col gap-4">
            <div className="flex justify-between">
              <p className="text-[#4318FF] text-[12px] md:text-[14px]">Fetching Google Reviews</p>
              {isFetchingReviews ? <GrayDotLoader /> : <img src={tick} alt="img" className="w-[20px] md:w-[28px]" />}
            </div>
            <div className="flex justify-between">
              <p className="text-[#4318FF] text-[12px] md:text-[14px]">Aggregating, analyzing and categorizing reviews</p>
              {isFetchingReviews ? <GrayDotLoader /> : <img src={tick} alt="img" className="w-[20px] md:w-[28px]" />}
            </div>
            <div className="flex justify-between">
              <p className="text-[#4318FF] text-[12px] md:text-[14px]">ProdAI Insights</p>
              {isFetchingReviews ? <GrayDotLoader /> : <img src={tick} alt="img" className="w-[20px] md:w-[28px]" />}
            </div>
          </div>
        )}
      </div>
      {/* Right Section */}
      <div className="w-full md:w-[40%] h-[300px] md:h-[551px] bg-white rounded-[28px] shadow-md mt-6 md:mt-0"></div>
    </div>
  );
};

export default BoxModel;
