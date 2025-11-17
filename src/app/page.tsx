"use client";

import { useState } from "react";
import { Dumbbell, Apple, Brain, Trophy, Sparkles, ChevronRight, Target, Zap, Heart } from "lucide-react";

type Section = "home" | "analysis" | "workout" | "nutrition" | "mental" | "challenges";

interface UserProfile {
  name: string;
  goal: string;
  level: string;
  age: string;
  weight: string;
  height: string;
}

export default function FitiAlphaAI() {
  const [currentSection, setCurrentSection] = useState<Section>("home");
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    goal: "",
    level: "",
    age: "",
    weight: "",
    height: "",
  });

  // Análise Inicial
  const renderAnalysis = () => {
    if (analysisStep === 0) {
      return (
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Análise Inicial</h2>
            <p className="text-gray-400">Vamos conhecer você melhor para personalizar sua experiência</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Seu nome</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Digite seu nome"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Qual seu objetivo?</label>
              <select
                value={formData.goal}
                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Selecione...</option>
                <option value="perder-peso">Perder peso</option>
                <option value="ganhar-massa">Ganhar massa muscular</option>
                <option value="definir">Definição muscular</option>
                <option value="saude">Melhorar saúde geral</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Nível de experiência</label>
              <select
                value={formData.level}
                onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Selecione...</option>
                <option value="iniciante">Iniciante</option>
                <option value="intermediario">Intermediário</option>
                <option value="avancado">Avançado</option>
              </select>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Idade</label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="25"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Peso (kg)</label>
                <input
                  type="number"
                  value={formData.weight}
                  onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="70"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Altura (cm)</label>
                <input
                  type="number"
                  value={formData.height}
                  onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="175"
                />
              </div>
            </div>

            <button
              onClick={() => {
                if (formData.name && formData.goal && formData.level) {
                  setUserProfile(formData);
                  setAnalysisStep(1);
                }
              }}
              className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Continuar <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      );
    }

    if (analysisStep === 1) {
      return (
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-center mb-8">
            <Sparkles className="w-16 h-16 text-purple-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-2">Análise Completa!</h2>
            <p className="text-gray-400">Aqui está seu perfil personalizado</p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 space-y-6">
            <div className="flex items-center gap-4 pb-6 border-b border-white/10">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                {formData.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{formData.name}</h3>
                <p className="text-gray-400">Nível {formData.level}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-gray-400 text-sm mb-1">Objetivo</p>
                <p className="text-white font-semibold">{formData.goal}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-gray-400 text-sm mb-1">IMC</p>
                <p className="text-white font-semibold">
                  {formData.weight && formData.height
                    ? (Number(formData.weight) / Math.pow(Number(formData.height) / 100, 2)).toFixed(1)
                    : "N/A"}
                </p>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-purple-400" />
                Recomendações da IA
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>Treino {formData.level === "iniciante" ? "3x por semana" : formData.level === "intermediario" ? "4-5x por semana" : "5-6x por semana"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Apple className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Dieta balanceada com foco em {formData.goal === "perder-peso" ? "déficit calórico" : "superávit calórico"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Heart className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>Pratique mindfulness 10 minutos por dia</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => setCurrentSection("home")}
              className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Ir para o Dashboard
            </button>
          </div>
        </div>
      );
    }
  };

  // Treinos
  const renderWorkout = () => (
    <div className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold text-white mb-6">Treinos Personalizados</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { title: "Treino A - Peito e Tríceps", exercises: "8 exercícios", duration: "45 min", difficulty: "Intermediário" },
          { title: "Treino B - Costas e Bíceps", exercises: "8 exercícios", duration: "50 min", difficulty: "Intermediário" },
          { title: "Treino C - Pernas", exercises: "10 exercícios", duration: "60 min", difficulty: "Avançado" },
          { title: "Treino D - Ombros e Abdômen", exercises: "7 exercícios", duration: "40 min", difficulty: "Iniciante" },
        ].map((workout, idx) => (
          <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 cursor-pointer group">
            <div className="flex items-start justify-between mb-4">
              <Dumbbell className="w-10 h-10 text-purple-400 group-hover:scale-110 transition-transform" />
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-semibold rounded-full">
                {workout.difficulty}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{workout.title}</h3>
            <div className="space-y-1 text-gray-400 text-sm">
              <p>{workout.exercises}</p>
              <p>{workout.duration}</p>
            </div>
            <button className="mt-4 w-full px-4 py-2 bg-purple-600/20 text-purple-300 font-medium rounded-lg hover:bg-purple-600/30 transition-all">
              Iniciar Treino
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  // Nutrição
  const renderNutrition = () => (
    <div className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold text-white mb-6">Nutrição e Alimentação</h2>
      
      <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 mb-6">
        <h3 className="text-2xl font-bold text-white mb-4">Plano Alimentar Diário</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/5 rounded-xl p-4">
            <p className="text-gray-400 text-sm mb-1">Calorias</p>
            <p className="text-2xl font-bold text-white">2.200 kcal</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <p className="text-gray-400 text-sm mb-1">Proteínas</p>
            <p className="text-2xl font-bold text-white">150g</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <p className="text-gray-400 text-sm mb-1">Água</p>
            <p className="text-2xl font-bold text-white">3L</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          { meal: "Café da Manhã", time: "07:00", items: ["3 ovos mexidos", "2 fatias de pão integral", "1 banana", "Café preto"] },
          { meal: "Almoço", time: "12:00", items: ["150g frango grelhado", "Arroz integral", "Brócolis no vapor", "Salada verde"] },
          { meal: "Lanche", time: "15:00", items: ["Whey protein", "1 maçã", "Castanhas"] },
          { meal: "Jantar", time: "19:00", items: ["150g peixe", "Batata doce", "Legumes assados"] },
        ].map((meal, idx) => (
          <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">{meal.meal}</h3>
              <span className="text-gray-400 text-sm">{meal.time}</span>
            </div>
            <ul className="space-y-2">
              {meal.items.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-300">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  // Coach Mental
  const renderMental = () => (
    <div className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold text-white mb-6">Coach Mental IA</h2>
      
      <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Seu Coach Pessoal</h3>
            <p className="text-gray-400">Sempre aqui para te motivar</p>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="bg-white/5 rounded-2xl p-4 border-l-4 border-purple-500">
            <p className="text-white">
              "Olá {userProfile?.name || "Atleta"}! Lembre-se: cada treino é uma vitória. Você está mais forte do que ontem! 💪"
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-4 border-l-4 border-blue-500">
            <p className="text-white">
              "A consistência é a chave. Pequenos passos todos os dias levam a grandes resultados. Continue firme! 🎯"
            </p>
          </div>
        </div>

        <div className="bg-white/5 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-white mb-4">Exercício de Mindfulness</h4>
          <p className="text-gray-300 mb-4">Respire fundo 5 vezes. Inspire por 4 segundos, segure por 4, expire por 4.</p>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all">
            Iniciar Meditação Guiada
          </button>
        </div>
      </div>
    </div>
  );

  // Desafios
  const renderChallenges = () => (
    <div className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold text-white mb-6">Desafios Ativos</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { title: "30 Dias de Treino", progress: 65, days: "19/30 dias", reward: "Medalha de Ouro" },
          { title: "Hidratação Perfeita", progress: 80, days: "24/30 dias", reward: "Badge Água" },
          { title: "Dieta Balanceada", progress: 45, days: "13/30 dias", reward: "Troféu Nutrição" },
          { title: "Mindfulness Diário", progress: 90, days: "27/30 dias", reward: "Emblema Zen" },
        ].map((challenge, idx) => (
          <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-yellow-500/50 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <Trophy className="w-10 h-10 text-yellow-400" />
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-xs font-semibold rounded-full">
                {challenge.progress}%
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{challenge.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{challenge.days}</p>
            
            <div className="mb-4">
              <div className="w-full bg-white/10 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${challenge.progress}%` }}
                ></div>
              </div>
            </div>

            <p className="text-sm text-gray-400">
              Recompensa: <span className="text-yellow-400 font-semibold">{challenge.reward}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  // Home/Dashboard
  const renderHome = () => (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          FITI-ALPHA.AI
        </h1>
        <p className="text-xl text-gray-400">Seu coach fitness inteligente completo</p>
      </div>

      {userProfile && (
        <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xl font-bold text-white">
                {userProfile.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Bem-vindo, {userProfile.name}!</h3>
                <p className="text-gray-400">Continue sua jornada fitness</p>
              </div>
            </div>
            <Sparkles className="w-8 h-8 text-yellow-400" />
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <button
          onClick={() => setCurrentSection("workout")}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 group text-left"
        >
          <Dumbbell className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-bold text-white mb-2">Treinos</h3>
          <p className="text-gray-400 text-sm">Planos personalizados com IA</p>
        </button>

        <button
          onClick={() => setCurrentSection("nutrition")}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-green-500/50 hover:bg-white/10 transition-all duration-300 group text-left"
        >
          <Apple className="w-12 h-12 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-bold text-white mb-2">Nutrição</h3>
          <p className="text-gray-400 text-sm">Dicas e planos alimentares</p>
        </button>

        <button
          onClick={() => setCurrentSection("mental")}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 group text-left"
        >
          <Brain className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-bold text-white mb-2">Coach Mental</h3>
          <p className="text-gray-400 text-sm">Motivação e mindfulness</p>
        </button>

        <button
          onClick={() => setCurrentSection("challenges")}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-yellow-500/50 hover:bg-white/10 transition-all duration-300 group text-left"
        >
          <Trophy className="w-12 h-12 text-yellow-400 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-bold text-white mb-2">Desafios</h3>
          <p className="text-gray-400 text-sm">Conquiste recompensas</p>
        </button>
      </div>

      {!userProfile && (
        <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 text-center">
          <Sparkles className="w-16 h-16 text-purple-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Comece sua jornada!</h3>
          <p className="text-gray-400 mb-6">Faça sua análise inicial para receber um plano personalizado</p>
          <button
            onClick={() => setCurrentSection("analysis")}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 inline-flex items-center gap-2"
          >
            Iniciar Análise <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen p-4 md:p-8">
      {/* Header */}
      <header className="max-w-7xl mx-auto mb-8">
        <nav className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <button
              onClick={() => setCurrentSection("home")}
              className="flex items-center gap-2 text-white font-bold text-xl hover:text-purple-400 transition-colors"
            >
              <Sparkles className="w-6 h-6" />
              FITI-ALPHA.AI
            </button>
            
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => setCurrentSection("workout")}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  currentSection === "workout"
                    ? "bg-purple-600 text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                Treinos
              </button>
              <button
                onClick={() => setCurrentSection("nutrition")}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  currentSection === "nutrition"
                    ? "bg-green-600 text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                Nutrição
              </button>
              <button
                onClick={() => setCurrentSection("mental")}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  currentSection === "mental"
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                Coach
              </button>
              <button
                onClick={() => setCurrentSection("challenges")}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  currentSection === "challenges"
                    ? "bg-yellow-600 text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                Desafios
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto">
        {currentSection === "home" && renderHome()}
        {currentSection === "analysis" && renderAnalysis()}
        {currentSection === "workout" && renderWorkout()}
        {currentSection === "nutrition" && renderNutrition()}
        {currentSection === "mental" && renderMental()}
        {currentSection === "challenges" && renderChallenges()}
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto mt-16 text-center text-gray-500 text-sm">
        <p>FITI-ALPHA.AI - Transformando vidas através da tecnologia e fitness</p>
      </footer>
    </div>
  );
}
