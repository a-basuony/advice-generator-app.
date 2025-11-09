import React from "react";
import Button from "./Button";
import { useAdvice } from "../hooks/useAdvice";
import dividerDesktop from "/pattern-divider-desktop.svg";
import dividerMobile from "/pattern-divider-mobile.svg";
import LoadingSkeleton from "./LoadingSkeleton";

const AdviceCard = () => {
  const { advice, id, loading, error, fetchAdvice } = useAdvice();

  return (
    <div
      className="relative bg-primary-900 text-primary-200 p-8 rounded-2xl shadow-xl text-center w-[90%] max-w-md transform transition-all duration-500
         hover:scale-[1.009]     hover:shadow-[0_0_40px_rgba(0,0,0,0.4)]"
    >
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <>
          <h2 className="text-accent-300 uppercase mb-4 text-sm">
            {id ? (
              <>
                <span className="tracking-[3px]">Advice #</span>
                <span className="tracking-normal ml-1">{id}</span>
              </>
            ) : (
              "Advice"
            )}
          </h2>

          <div className="min-h-[84px] mb-6">
            {error ? (
              <p className="text-red-400">{error}</p>
            ) : (
              <p className="text-xl font-semibold">“{advice}”</p>
            )}
          </div>

          {/* divider image */}
          <div className="mb-8 mx-auto">
            <img
              src={dividerMobile}
              alt="divider"
              className="block sm:hidden mx-auto"
            />
            <img
              src={dividerDesktop}
              alt="divider"
              className="hidden sm:block mx-auto"
            />
          </div>
        </>
      )}

      {/* Button */}
      <Button loading={loading} fetchAdvice={fetchAdvice} />
    </div>
  );
};

export default AdviceCard;
