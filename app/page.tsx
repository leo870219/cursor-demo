"use client";
import { motion } from "framer-motion";
import { CpuChipIcon, BeakerIcon, LightBulbIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              AITech Solutions
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-blue-400 transition-colors">關於我們</a>
              <a href="#products" className="hover:text-blue-400 transition-colors">產品服務</a>
              <a href="#technology" className="hover:text-blue-400 transition-colors">技術優勢</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">聯繫我們</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            打造下一代
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              {" "}AI 創新解決方案
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            我們致力於開發前沿AI技術，為企業提供智能化解決方案
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
              開始合作
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900/50 p-8 rounded-xl"
            >
              <CpuChipIcon className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">智能算法</h3>
              <p className="text-gray-400">採用最新的機器學習技術，提供高效準確的AI解決方案</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-900/50 p-8 rounded-xl"
            >
              <BeakerIcon className="w-12 h-12 text-purple-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">創新研發</h3>
              <p className="text-gray-400">持續投入研發，突破技術界限，引領行業發展</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-900/50 p-8 rounded-xl"
            >
              <LightBulbIcon className="w-12 h-12 text-green-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">客製化服務</h3>
              <p className="text-gray-400">根據客戶需求，提供量身定制的AI應用解決方案</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">與我們聯繫</h2>
          <div className="max-w-md mx-auto bg-gray-900/50 p-8 rounded-xl">
            <form className="space-y-6">
              <div>
                <input type="email" placeholder="您的電子郵件" className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <textarea placeholder="請描述您的需求" rows={4} className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                發送訊息
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
