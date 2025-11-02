import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Meu Mundo inBlue
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("global")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Temas Globais
            </button>
            <button
              onClick={() => scrollToSection("awareness")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Conscientização
            </button>
            <button
              onClick={() => scrollToSection("medications")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Medicações
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-semibold"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("innovations")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Inovações 2025
            </button>
          </div>

          <div className="hidden md:block">
            <Button
              onClick={() => window.open("https://instagram.com/meumundoinblue", "_blank")}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              @meumundoinblue
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-3 pb-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-gray-700 hover:text-blue-600 py-2"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("global")}
              className="block w-full text-left text-gray-700 hover:text-blue-600 py-2"
            >
              Temas Globais
            </button>
            <button
              onClick={() => scrollToSection("awareness")}
              className="block w-full text-left text-gray-700 hover:text-blue-600 py-2"
            >
              Conscientização
            </button>
            <button
              onClick={() => scrollToSection("medications")}
              className="block w-full text-left text-gray-700 hover:text-blue-600 py-2"
            >
              Medicações
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="block w-full text-left text-gray-700 hover:text-blue-600 py-2 font-semibold"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("innovations")}
              className="block w-full text-left text-gray-700 hover:text-blue-600 py-2"
            >
              Inovações 2025
            </button>
            <Button
              onClick={() => window.open("https://instagram.com/meumundoinblue", "_blank")}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              @meumundoinblue
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
