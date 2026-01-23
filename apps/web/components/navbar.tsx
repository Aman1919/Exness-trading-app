import Image from "next/image";

export function NavBar() {
  return (
    <header className="w-full h-14 bg-[#0f1a1f] flex items-center px-4 text-white">
      
      {/* LEFT: Logo */}
      <div className="flex items-center gap-3">
        <Image
          src="/exness-logo.png"
          alt="Exness"
          width={90}
          height={24}
          priority
        />
      </div>

      {/* MIDDLE: Asset Tabs */}
      <div className="flex items-center gap-4 ml-6">
        <AssetTab label="BTC" active />
        <AssetTab label="XAU/USD" />
        <button className="text-xl text-gray-400 hover:text-white">+</button>
      </div>

      {/* RIGHT */}
      <div className="ml-auto flex items-center gap-4">
        
        {/* Account Type */}
        <div className="text-sm">
          <span className="text-green-400 font-medium">Demo</span>
          <span className="text-gray-400 ml-1">Standard</span>
        </div>

        {/* Balance */}
        <div className="text-sm font-medium">
          9,988.07 <span className="text-gray-400">USD</span>
        </div>

        {/* Icons */}
        <IconCircle>⏱</IconCircle>
        <IconCircle>☰</IconCircle>
        <IconCircle>👤</IconCircle>

        {/* Deposit Button */}
        <button className="bg-[#1f2f36] hover:bg-[#2a3f48] px-4 py-1.5 rounded-md text-sm font-medium">
          Deposit
        </button>
      </div>
    </header>
  );
}

function AssetTab({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`px-3 py-1.5 rounded-md text-sm font-medium ${
        active
          ? "bg-[#1f2f36] text-white"
          : "text-gray-400 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}

function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1f2f36] hover:bg-[#2a3f48] cursor-pointer">
      {children}
    </div>
  );
}
