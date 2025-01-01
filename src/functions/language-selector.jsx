import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = [
    { label: "English", value: "en" },
    { label: "Français", value: "fr" },
    { label: "العربية", value: "ar" },
  ];

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(()=>{
    document.body.dir = i18n.dir()
  },[i18n,i18n.language])
  return (
    <div className="text-center">
      <div className="relative inline-block text-left" ref={dropdownRef} data="clickable">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-between w-full bg-white border border-[#dddfe2] text-[#1c1e21] text-[15px] py-[5px] px-4 rounded hover:border-[#ccd0d5] focus:border-[#ccd0d5] focus:outline-none"
        >
          <span>
            {options.find((opt) => opt.value === i18n.language).label} ({options.find((opt) => opt.value === i18n.language).value})
          </span>
          <svg className="w-3 h-3 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
        {isOpen && (
          <div className="absolute mt-1 w-full bg-white border border-[#dddfe2] rounded-sm shadow-lg z-10 left-0">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleLanguageChange(option.value)}
                className="block w-full text-left px-2 py-[6px] text-[15px] hover:bg-[#f2f2f2] focus:outline-none"
              >
                {option.label} ({option.value})
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
