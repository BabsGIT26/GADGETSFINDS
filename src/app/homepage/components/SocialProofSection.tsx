

const SocialProofSection = () => {

  const socialPlatforms = [
    {
      name: 'X / Twitter',
      href: 'https://x.com/Gadgets_finds',
      color: 'text-white',
      bgColor: 'bg-black',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      name: 'Pinterest',
      href: 'https://www.pinterest.com/best_gadgets_finds/',
      color: 'text-white',
      bgColor: 'bg-[#E60023]',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-gradient-to-br from-brand-dark via-slate-900 to-brand-dark rounded-xl p-6 md:p-8 lg:p-12">
      <div className="flex items-center justify-center gap-3 md:gap-4">
        {socialPlatforms?.map((platform) => (
          <a
            key={platform?.name}
            href={platform?.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center gap-1.5 group`}
            aria-label={`Follow us on ${platform?.name}`}
          >
            <div className={`w-11 h-11 md:w-12 md:h-12 ${platform?.bgColor} ${platform?.color} rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110`}>
              {platform?.icon}
            </div>
            <span className="text-xs text-brand-text-secondary group-hover:text-brand-text-primary transition-colors">{platform?.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialProofSection;