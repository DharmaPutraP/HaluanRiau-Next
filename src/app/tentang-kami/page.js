"use client";
import React, { useEffect, useState } from "react";
import { fetchTentangKami } from "@/services/api";
import { createSanitizedHtml } from "@/utils/sanitizer";

function TentangKami() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTentangKami = async () => {
      try {
        setLoading(true);
        const data = await fetchTentangKami();
        setPageData(data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    loadTentangKami();
  }, []);

  return (
    <div className="w-full px-2 sm:px-4">
      <div className="bg-white px-3 sm:px-4 md:px-10 py-4 sm:py-6 md:py-8 mt-2">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : pageData ? (
          <>
            <div
              className="prose prose-sm md:prose-base max-w-none"
              dangerouslySetInnerHTML={createSanitizedHtml(pageData.content)}
            />
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500">Konten tidak tersedia</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TentangKami;
