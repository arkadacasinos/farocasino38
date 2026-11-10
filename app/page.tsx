const REF_LINK = "https://comboflo.site/aetf3u2q9u"

export default function FaroCasinoPage() {
  return (
    <div className="f9k2-wrap min-h-screen bg-[#121316] text-[#e5e7eb] flex flex-col font-sans">
      {/* Mobile Topbar */}
      <header className="f9k2-mobile-bar lg:hidden sticky top-0 z-40 bg-[#16181d] border-b border-[#252830] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a
            href="#f9k2-sidebar"
            aria-label="Открыть меню Faro Casino"
            className="p-2 text-[#f5a623] hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </a>
          <a href={REF_LINK} className="flex items-center gap-2 group">
            <span className="text-[#f5a623] font-black text-xl tracking-wider flex items-center gap-1">
              <svg className="w-6 h-6 text-[#f5a623]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15 9L22 9L16.5 13.5L18.5 20.5L12 16L5.5 20.5L7.5 13.5L2 9L9 9L12 2Z" />
              </svg>
              FARO
            </span>
          </a>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={REF_LINK}
            className="px-3.5 py-1.5 text-xs font-semibold text-[#c7cad1] bg-[#23262e] rounded-full border border-[#343844] hover:text-white"
          >
            Вход
          </a>
          <a
            href={REF_LINK}
            className="f9k2-gold-btn px-4 py-1.5 text-xs font-bold rounded-full text-[#121316]"
          >
            Регистрация
          </a>
        </div>
      </header>

      {/* Main Layout Container */}
      <div className="f9k2-body-container flex-1 flex relative">
        {/* Mobile Scrim / Close Target */}
        <a
          href="#!"
          id="f9k2-scrim"
          aria-hidden="true"
          className="fixed inset-0 bg-black/70 z-40 lg:hidden opacity-0 pointer-events-none transition-opacity duration-300 target:opacity-100 target:pointer-events-auto"
        />

        {/* Sidebar Rail (Exact Desktop Sidebar & Mobile Drawer) */}
        <aside
          id="f9k2-sidebar"
          className="f9k2-rail fixed lg:sticky top-0 left-0 h-screen w-[240px] bg-[#16181d] border-r border-[#23262e] z-50 flex flex-col justify-between py-4 px-3 overflow-y-auto -translate-x-full lg:translate-x-0 transition-transform duration-300 target:translate-x-0"
        >
          <div className="flex flex-col gap-4">
            {/* Logo and Mobile Close */}
            <div className="flex items-center justify-between px-2 pt-1 pb-2">
              <a href={REF_LINK} className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#f5a623] to-[#b3740e] flex items-center justify-center text-[#121316] font-black text-lg shadow-md shadow-[#f5a623]/20">
                  M
                </div>
                <span className="text-white font-extrabold text-xl tracking-widest">FARO</span>
              </a>
              <a
                href="#!"
                aria-label="Закрыть меню"
                className="lg:hidden p-1.5 text-[#8a8f9d] hover:text-white"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </a>
            </div>

            {/* Wheel of Fortune Widget */}
            <a
              href={REF_LINK}
              className="p-2.5 rounded-2xl bg-[#1e2027] border border-[#f5a623]/25 hover:border-[#f5a623] transition-all flex items-center justify-between group shadow-lg"
            >
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white group-hover:text-[#f5a623] transition-colors">
                  Рулетка удачи
                </span>
                <span className="text-[11px] text-[#f5a623] font-mono mt-0.5 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path strokeLinecap="round" strokeWidth="2" d="M12 6v6l4 2" />
                  </svg>
                  01:06:51
                </span>
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 flex items-center justify-center">
                <img
                  src="/images/wheel-exact.png"
                  alt="Рулетка удачи Faro Casino"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full group-hover:rotate-45 transition-transform duration-500"
                />
              </div>
            </a>

            {/* Navigation links matching screenshot 2 */}
            <nav className="flex flex-col gap-1 text-[13px] font-medium text-[#c4c7cf]">
              <a
                href={REF_LINK}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#23262e] hover:text-[#f5a623] transition-colors"
              >
                <span className="text-[#f5a623] text-base">🎁</span>
                <span>Бонусы</span>
              </a>
              <a
                href={REF_LINK}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#23262e] hover:text-[#f5a623] transition-colors"
              >
                <span className="text-[#f5a623] text-base">💲</span>
                <span>Магазин</span>
              </a>
              <a
                href={REF_LINK}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#23262e] hover:text-[#f5a623] transition-colors"
              >
                <span className="text-[#f5a623] text-base">🎯</span>
                <span>Миссии</span>
              </a>
              <a
                href={REF_LINK}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#23262e] hover:text-[#f5a623] transition-colors"
              >
                <span className="text-[#f5a623] text-base">🧰</span>
                <span>Сундуки</span>
              </a>
              <a
                href={REF_LINK}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#23262e] hover:text-[#f5a623] transition-colors"
              >
                <span className="text-[#f5a623] text-base">⚡</span>
                <span>Умножение баланса</span>
              </a>
              <a
                href={REF_LINK}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#23262e]/60 text-[#f5a623] border border-[#f5a623]/20"
              >
                <span className="text-base">🎃</span>
                <span>Шабаш Хэллоуина</span>
              </a>
              <a
                href={REF_LINK}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#23262e] hover:text-[#f5a623] transition-colors"
              >
                <span className="text-[#f5a623] text-base">👥</span>
                <span>Реферальная прог...</span>
              </a>
              <a
                href={REF_LINK}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#23262e] hover:text-[#f5a623] transition-colors"
              >
                <span className="text-[#f5a623] text-base">⭐</span>
                <span>VIP Клуб</span>
              </a>
            </nav>
          </div>

          {/* Language Selector */}
          <div className="pt-4 border-t border-[#23262e] px-2">
            <a
              href={REF_LINK}
              className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#1d1f26] border border-[#2b2f3a] text-xs text-[#a3a8b5] hover:text-white"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm">🇷🇺</span>
                <span>Русский</span>
              </div>
              <svg className="w-4 h-4 text-[#8a8f9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 flex flex-col min-w-0 p-3 sm:p-5 lg:p-7 max-w-[1400px]">
          {/* Desktop Topbar */}
          <div className="hidden lg:flex items-center justify-end gap-3 pb-6">
            <a
              href={REF_LINK}
              className="px-6 py-2.5 text-sm font-semibold text-[#d1d5db] bg-[#1e2027] hover:bg-[#292c36] hover:text-white rounded-full border border-[#2e323e] transition-colors"
            >
              Вход
            </a>
            <a
              href={REF_LINK}
              className="f9k2-gold-btn px-7 py-2.5 text-sm font-bold rounded-full text-[#121316]"
            >
              Регистрация
            </a>
          </div>

          {/* SCREEN 1: Exact Hero Banner (Halloween Coven / Шабаш Хэллоуина) */}
          <section className="f9k2-hero-glow rounded-3xl p-6 sm:p-9 lg:p-10 mb-6 overflow-hidden relative shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
              <div className="md:col-span-7 flex flex-col items-start gap-3.5">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.15] text-balance tracking-tight">
                  Шабаш Хэллоуина <br />
                  <span className="text-[#f5a623]">21 день подарков</span>
                </h1>
                <p className="text-base sm:text-lg text-[#d1d5db] font-semibold max-w-xl">
                  Забирайте награды на <strong className="text-white">139 500 ₽</strong> и{" "}
                  <strong className="text-[#f5a623]">1 145 FS</strong>
                </p>
                <div className="pt-2">
                  <a
                    href={REF_LINK}
                    className="f9k2-gold-btn inline-block px-9 py-3 rounded-2xl text-base font-black tracking-wide text-[#121316] shadow-lg shadow-[#f5a623]/25"
                  >
                    Забрать
                  </a>
                </div>

                {/* Carousel Indicators */}
                <div className="flex items-center gap-1.5 pt-4">
                  <span className="w-7 h-2 rounded-full bg-[#f5a623]" />
                  <span className="w-2 h-2 rounded-full bg-[#3a3e4a]" />
                  <span className="w-2 h-2 rounded-full bg-[#3a3e4a]" />
                  <span className="w-2 h-2 rounded-full bg-[#3a3e4a]" />
                  <span className="w-2 h-2 rounded-full bg-[#3a3e4a]" />
                </div>
              </div>

              {/* Witch & Gold illustration right side */}
              <div className="md:col-span-5 flex justify-center md:justify-end relative">
                <div className="relative w-full max-w-[380px] h-[260px] sm:h-[310px] flex items-center justify-center overflow-hidden rounded-2xl">
                  <img
                    src="/images/witch-exact.png"
                    alt="Шабаш Хэллоуина Faro Casino — подарки и фриспины"
                    width={380}
                    height={310}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* SCREEN 1: 3 Bottom Cards matching screenshot 2 */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {/* Card 1: Депозитный стрик */}
            <div className="f9k2-glass-card rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden group">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Депозитный стрик</h3>
                <p className="text-xs text-[#a0a5b3] leading-relaxed mb-4">
                  Чем длиннее серия депозитов, тем ценнее призы
                </p>
              </div>

              <div className="relative my-2 flex items-center justify-between">
                {/* Steps and Gifts */}
                <div className="flex items-center gap-1.5 text-xs text-[#8f94a3] font-semibold">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#f5a623] to-[#b3740e] flex items-center justify-center text-[#121316] font-bold shadow-md shadow-[#f5a623]/30">
                    👑
                  </div>
                  <span className="text-[#f5a623] text-sm">🎁</span>
                  <span className="w-6 h-6 rounded-full bg-[#252832] flex items-center justify-center text-xs text-[#a0a5b3]">
                    4
                  </span>
                  <span className="w-6 h-6 rounded-full bg-[#252832] flex items-center justify-center text-xs text-[#a0a5b3]">
                    5
                  </span>
                  <span className="w-6 h-6 rounded-full bg-[#252832] flex items-center justify-center text-xs text-[#a0a5b3]">
                    6
                  </span>
                  <span className="text-[#f5a623] text-sm">🎁</span>
                  <span className="text-[#f5a623] text-sm">🎁</span>
                </div>

                <div className="w-24 h-24 shrink-0 relative flex items-center justify-center">
                  <img
                    src="/images/wallet-exact.png"
                    alt="Депозитный стрик в Фаро казино"
                    width={96}
                    height={96}
                    className="object-contain w-full h-full drop-shadow-md"
                  />
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={REF_LINK}
                  className="f9k2-gold-btn block text-center py-2.5 rounded-xl text-xs font-bold text-[#121316]"
                >
                  Начать стрик
                </a>
              </div>
            </div>

            {/* Card 2: Faro Casino App */}
            <div className="f9k2-glass-card rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden group">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Faro Casino App</h3>
                <p className="text-xs text-[#a0a5b3] leading-relaxed mb-3">
                  Скачивайте мобильное приложение и получайте эксклюзивные бонусы
                </p>
                <div className="flex items-center gap-1.5 text-xs text-[#f5a623] font-semibold mb-2">
                  <span>🤖</span>
                  <span>Доступно для Android</span>
                </div>
              </div>

              <div className="flex items-end justify-between">
                <div className="w-1/2 pt-1 pb-1">
                  <a
                    href={REF_LINK}
                    className="f9k2-gold-btn block text-center py-2.5 rounded-xl text-xs font-bold text-[#121316]"
                  >
                    Скачать
                  </a>
                </div>
                <div className="w-28 h-28 relative -mb-3 -mr-2">
                  <img
                    src="/images/app-girl-exact.png"
                    alt="Скачать мобильное приложение Faro Casino"
                    width={112}
                    height={112}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Card 3: Миссии */}
            <div className="f9k2-glass-card rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden group">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Миссии</h3>
                <p className="text-xs text-[#a0a5b3] leading-relaxed mb-3">
                  Выполняйте задания, собирайте Faro Coins и обменивайте их на награды
                </p>
                <div className="flex items-center justify-between bg-[#191b22] px-3 py-2 rounded-xl border border-[#2b2f3b] mb-3">
                  <span className="text-xs text-white font-medium">Завершите 3 депозита</span>
                  <span className="text-xs font-bold text-[#f5a623] bg-[#f5a623]/10 px-2 py-0.5 rounded-md border border-[#f5a623]/30">
                    +12 Faro Coins
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <a
                  href={REF_LINK}
                  className="f9k2-subcard-btn block flex-1 text-center py-2.5 rounded-xl text-xs font-bold mr-3 border border-[#343846]"
                >
                  Начать
                </a>
                <div className="w-20 h-20 shrink-0">
                  <img
                    src="/images/target-exact.png"
                    alt="Миссии и задания в Faro Casino онлайн"
                    width={80}
                    height={80}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* SEO TEXT SHEET (300-400 words) with all target keywords   */}
          {/* ========================================================= */}
          <article id="seo-faro-overview" className="f9k2-seo-article border-t border-[#23262e] pt-10 pb-16">
            <div className="bg-[#171920] border border-[#252833] rounded-3xl p-6 sm:p-9 shadow-xl flex flex-col gap-8">
              {/* SECTION 1 */}
              <section className="flex flex-col gap-3">
                <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2">
                  <span className="text-[#f5a623]">★</span>
                  Faro Casino официальный сайт и Фаро казино официальный сайт
                </h2>
                <p className="text-sm sm:text-base text-[#b8bcc8] leading-relaxed">
                  Популярный клуб <strong>Faro Casino</strong> предоставляет пользователям лицензионный софт,
                  турниры и моментальный вывод выигрышей. Если вы ищете проверенный{" "}
                  <strong>Faro Casino официальный сайт</strong> или оригинальный{" "}
                  <strong>Фаро казино официальный сайт</strong>, здесь вас ждут тысячи сертифицированных игровых
                  автоматов от провайдеров мирового уровня, карточные столы и трансляции с реальными дилерами. Каждый
                  новый гость портала <strong>Faro Casino</strong> получает приветственный пакет подарков с бонусом на
                  депозит и фриспинами. Настоящий <strong>Фаро казино официальный</strong> ресурс гарантирует честность выплат.
                </p>
                <p className="text-sm sm:text-base text-[#b8bcc8] leading-relaxed">
                  Удобный <strong>Faro Casino официальный</strong> портал разработан с учетом требований мобильных
                  игроков: интуитивное меню, мгновенная загрузка слотов и безопасность делают клуб <strong>Faro казино</strong>{" "}
                  лучшим выбором для ценителей качества.
                </p>
              </section>

              {/* SECTION 2 */}
              <section className="flex flex-col gap-3">
                <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2">
                  <span className="text-[#f5a623]">★</span>
                  Фаро казино зеркало рабочее и Faro Casino зеркало на сегодня
                </h2>
                <p className="text-sm sm:text-base text-[#b8bcc8] leading-relaxed">
                  При сетевых блокировках провайдеров всегда доступно актуальное{" "}
                  <strong>фаро казино зеркало</strong>. Оно представляет собой полноценную копию платформы с сохранением
                  баланса, активных бонусов и истории ставок. Найти безопасное{" "}
                  <strong>фаро казино зеркало рабочее</strong> можно в один клик по нашим кнопкам прямого перехода.
                </p>
                <p className="text-sm sm:text-base text-[#b8bcc8] leading-relaxed">
                  Используя надежное <strong>faro casino зеркало</strong>, вы обходите любые ограничения без
                  потери скорости. Запуская резервное <strong>фаро казино зеркало рабочее</strong>, вы получаете
                  доступ к кассе, слотам и турнирам 24 часа в сутки.
                </p>
              </section>

              {/* SECTION 3 */}
              <section className="flex flex-col gap-3">
                <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2">
                  <span className="text-[#f5a623]">★</span>
                  В Faro Casino играть онлайн: как в Фаро казино играть на деньги
                </h2>
                <p className="text-sm sm:text-base text-[#b8bcc8] leading-relaxed">
                  Чтобы в <strong>Faro Casino играть</strong> на рубли или криптовалюту, достаточно пройти регистрацию
                  за 15 секунд. Вы также можете в <strong>фаро казино играть</strong> бесплатно в ознакомительном
                  демо-режиме, изучая новинки слотов без риска. На платформе <strong>фаро казино онлайн</strong>{" "}
                  собраны прогрессивные джекпоты, краш-игры и эксклюзивные миссии.
                </p>
                <p className="text-sm sm:text-base text-[#b8bcc8] leading-relaxed">
                  Увлекательный азартный клуб <strong>фаро казино</strong> обеспечивает круглосуточную поддержку игроков,
                  регулярный кешбэк и быстрые выплаты. Выбирайте надежное <strong>Faro казино</strong>, нажимайте
                  регистрацию и забирайте стартовый бонус уже сегодня!
                </p>
              </section>

              {/* Summary Table */}
              <div className="overflow-x-auto rounded-xl border border-[#272a36]">
                <table className="w-full text-left text-xs sm:text-sm text-[#cbd0dc]">
                  <thead className="bg-[#1f222c] text-[#f5a623] font-bold">
                    <tr>
                      <th className="p-3">Параметр</th>
                      <th className="p-3">Характеристика Faro Casino</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#272a36]">
                    <tr>
                      <td className="p-3 font-semibold text-white">Официальный статус</td>
                      <td className="p-3">Лицензионное Faro Casino онлайн</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-white">Стартовый бонус</td>
                      <td className="p-3">До 139 500 ₽ + 1 145 фриспинов</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-white">Обход блокировок</td>
                      <td className="p-3">Автоматическое фаро казино зеркало рабочее</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-white">Вывод средств</td>
                      <td className="p-3">От 15 минут на карты и криптокошельки</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Call to action inside article */}
              <div className="text-center pt-2">
                <a
                  href={REF_LINK}
                  className="f9k2-gold-btn inline-block px-10 py-3.5 rounded-full text-base font-extrabold text-[#121316]"
                >
                  Перейти на официальный сайт Faro Casino
                </a>
              </div>
            </div>
          </article>

          {/* Footer with Hashtags anchors (built from keyword phrases) */}
          <footer className="border-t border-[#23262e] pt-8 pb-12 text-xs text-[#828795] flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-[#f5a623] font-bold text-lg">FARO</span>
                <span>© 2026. Все права защищены.</span>
              </div>
              <div className="flex items-center gap-4 text-[#a3a8b5]">
                <a href={REF_LINK} className="hover:text-white transition-colors">
                  Правила и условия
                </a>
                <a href={REF_LINK} className="hover:text-white transition-colors">
                  Ответственная игра
                </a>
                <a href={REF_LINK} className="hover:text-white transition-colors">
                  Политика конфиденциальности
                </a>
              </div>
            </div>

            {/* Keyword Hashtags for on-site navigation */}
            <div className="flex flex-col gap-2 pt-2">
              <span className="text-[11px] uppercase tracking-wider font-bold text-[#626775]">Тематические теги:</span>
              <div className="flex flex-wrap gap-2 text-[11px]">
                <a href="#seo-faro-overview" className="px-2.5 py-1 rounded-md bg-[#1a1c22] border border-[#282b35] hover:border-[#f5a623] hover:text-[#f5a623]">
                  #farocasino
                </a>
                <a href="#seo-faro-overview" className="px-2.5 py-1 rounded-md bg-[#1a1c22] border border-[#282b35] hover:border-[#f5a623] hover:text-[#f5a623]">
                  #farocasinoзеркало
                </a>
                <a href="#seo-faro-overview" className="px-2.5 py-1 rounded-md bg-[#1a1c22] border border-[#282b35] hover:border-[#f5a623] hover:text-[#f5a623]">
                  #farocasinoиграть
                </a>
                <a href="#seo-faro-overview" className="px-2.5 py-1 rounded-md bg-[#1a1c22] border border-[#282b35] hover:border-[#f5a623] hover:text-[#f5a623]">
                  #farocasinoофициальный
                </a>
                <a href="#seo-faro-overview" className="px-2.5 py-1 rounded-md bg-[#1a1c22] border border-[#282b35] hover:border-[#f5a623] hover:text-[#f5a623]">
                  #farocasinoофициальныйсайт
                </a>
                <a href="#seo-faro-overview" className="px-2.5 py-1 rounded-md bg-[#1a1c22] border border-[#282b35] hover:border-[#f5a623] hover:text-[#f5a623]">
                  #faroказино
                </a>
                <a href="#seo-faro-overview" className="px-2.5 py-1 rounded-md bg-[#1a1c22] border border-[#282b35] hover:border-[#f5a623] hover:text-[#f5a623]">
                  #фароказино
                </a>
                <a href="#seo-faro-overview" className="px-2.5 py-1 rounded-md bg-[#1a1c22] border border-[#282b35] hover:border-[#f5a623] hover:text-[#f5a623]">
                  #фароказинозеркало
                </a>
                <a href="#seo-faro-overview" className="px-2.5 py-1 rounded-md bg-[#1a1c22] border border-[#282b35] hover:border-[#f5a623] hover:text-[#f5a623]">
                  #фароказинозеркалорабочее
                </a>
                <a href="#seo-faro-overview" className="px-2.5 py-1 rounded-md bg-[#1a1c22] border border-[#282b35] hover:border-[#f5a623] hover:text-[#f5a623]">
                  #фароказиноиграть
                </a>
                <a href="#seo-faro-overview" className="px-2.5 py-1 rounded-md bg-[#1a1c22] border border-[#282b35] hover:border-[#f5a623] hover:text-[#f5a623]">
                  #фароказиноонлайн
                </a>
                <a href="#seo-faro-overview" className="px-2.5 py-1 rounded-md bg-[#1a1c22] border border-[#282b35] hover:border-[#f5a623] hover:text-[#f5a623]">
                  #фароказиноофициальный
                </a>
                <a href="#seo-faro-overview" className="px-2.5 py-1 rounded-md bg-[#1a1c22] border border-[#282b35] hover:border-[#f5a623] hover:text-[#f5a623]">
                  #фароказиноофициальныйсайт
                </a>
              </div>
            </div>
          </footer>
        </main>
      </div>

      {/* Floating Support Chat Widget (as seen in screenshot 2 bottom right) */}
      <a
        href={REF_LINK}
        aria-label="Поддержка Faro Casino"
        className="fixed bottom-5 right-5 z-40 w-12 h-12 rounded-full bg-[#f5a623] text-[#121316] flex items-center justify-center shadow-lg shadow-[#f5a623]/40 hover:scale-105 transition-transform"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
        </svg>
      </a>
    </div>
  )
}
