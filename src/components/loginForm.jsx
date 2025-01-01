import React from "react";
import LanguageSelector from "../functions/language-selector";
import LearnWayImg from "../../public/img/LearnWay.svg";
import { useTranslation } from "react-i18next";

export default function LoginForm() {
  const { t } = useTranslation();
  return (
    <div className="bg-white backdrop-filter backdrop-opacity-50 p-8 rounded-lg shadow-lg w-full max-w-md">
      <div className="text-center mb-6">
        <img
          src={LearnWayImg}
          alt="LearnWay"
          className="mx-auto mb-2 w-28 sm:w-40 lg:w-48"
        />
        <h1 className="text-3xl font-semibold cursor-default">{t("Login")}</h1>
      </div>
      <form>
        <div className="mb-3">
          <label
            className="block text-gray-700 text-sm md:text-base font-bold mb-2"
            htmlFor="username"
          >
            {t("Username")}
          </label>
          <input
            type="text"
            id="username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder={t("Username")}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm md:text-base font-bold mb-2"
            htmlFor="password"
          >
            {t("Password")}
          </label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder={t("Password")}
          />
        </div>
        <button
          type="submit"
          data="clickable"
          className="mb-4 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-bold py-2 w-full rounded-md focus:outline-none focus:shadow-outline"
        >
          {t("Log in")}
        </button>
      </form>
      <LanguageSelector />
    </div>
  );
}