import { useTranslation } from 'react-i18next';

export default function ErrorPage() {
  const { t } = useTranslation();

  document.title = "404 Not Found | LearnWay";
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f2f5]">
      <div className="max-w-[460px] w-full px-6 py-8 text-center">
        {/* <div className="mx-auto w-28 h-28 mb-8">

        </div> */}

        <h1 className="text-[20px] leading-[24px] font-semibold text-[#65676B] mb-2">
          {t('errorTitle')}
        </h1>

        <p className="text-[17px] leading-[20px] text-[#65676B] mb-6">
          {t('errorDescription')}
        </p>

        <div className="space-y-5">
          <a
            href="/"
            className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[15px] leading-[36px] px-4 rounded-[6px] transition-colors"
            data="clickable"
            onClick={(e) => {
              e.preventDefault();
              window.history.back();
            }}
          >
            {t('goBack')}
          </a>
        </div>
      </div>
    </div>
  )
}
