import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { ChevronDown, ChevronUp, Heart, Lightbulb, Brain, Globe, Users, Pill, Sparkles, Instagram } from "lucide-react";

export default function Home() {
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({});

  const toggleCard = (cardId: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container max-w-6xl">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Autismo no Mundo
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 font-medium">
              Temas Globais, Conscientização, Suporte e Inovações em 2025
            </p>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra como o autismo enriquece vidas, transforma famílias e impulsiona a inovação global. Uma jornada de celebração da neurodiversidade com base em evidências científicas e histórias inspiradoras.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6"
                onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Descubra os Superpoderes
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
                onClick={() => window.open("https://instagram.com/meumundoinblue", "_blank")}
              >
                <Instagram className="mr-2 h-5 w-5" />
                Siga @meumundoinblue
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Temas Globais Section */}
      <section id="global" className="py-20 px-4 bg-white">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <Globe className="h-16 w-16 mx-auto text-blue-600 mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Temas Globais do Autismo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O Transtorno do Espectro Autista (TEA) afeta milhões de pessoas em todo o mundo, transcendendo fronteiras culturais e socioeconômicas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 hover:border-blue-400 transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Prevalência Global</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Segundo a Organização Mundial da Saúde (OMS), estima-se que 1 em cada 100 crianças no mundo esteja no espectro autista. Nos Estados Unidos, o CDC reporta uma incidência de 1 em 36 crianças, demonstrando um aumento significativo no diagnóstico e na conscientização.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-400 transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Diversidade Cultural</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  O autismo manifesta-se de forma única em diferentes culturas. Enquanto alguns países focam em intervenções biomédicas, outros enfatizam abordagens sociais e educacionais. A neurodiversidade está ganhando força globalmente como um movimento que celebra as diferenças neurológicas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conscientização e Suporte Section */}
      <section id="awareness" className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <Users className="h-16 w-16 mx-auto text-purple-600 mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Conscientização e Suporte</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A conscientização sobre o autismo cresceu exponencialmente nas últimas décadas, impulsionando a criação de redes de suporte e políticas públicas inclusivas.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl">Movimentos de Advocacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Famílias de pessoas autistas estão na vanguarda do movimento de advocacy, transformando-se em líderes comunitários e defensores de direitos. No Brasil, organizações como "Autismo Positivo" e "Abraça" criam redes de apoio que conectam famílias, compartilham recursos e promovem a inclusão.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Globalmente, o Dia Mundial de Conscientização do Autismo (2 de abril) mobiliza milhões de pessoas, iluminando monumentos de azul e promovendo eventos educativos que desafiam estigmas e celebram a neurodiversidade.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200">
              <CardHeader>
                <CardTitle className="text-2xl">Redes de Suporte</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Redes de suporte online e presenciais fornecem recursos essenciais, desde grupos de pais até plataformas de terapeutas especializados. Essas comunidades oferecem não apenas informação, mas também um senso de pertencimento e compreensão mútua que é fundamental para o bem-estar familiar.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Medicações e Tratamentos Section */}
      <section id="medications" className="py-20 px-4 bg-white">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <Pill className="h-16 w-16 mx-auto text-green-600 mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Medicações e Tratamentos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Embora não exista uma "cura" para o autismo, diversas intervenções podem melhorar a qualidade de vida e apoiar o desenvolvimento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 hover:border-green-400 transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Ácido Fólico (Folínico)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  O ácido folínico, uma forma ativa do ácido fólico, tem sido estudado por seu potencial em melhorar a comunicação verbal e reduzir comportamentos repetitivos em algumas crianças autistas. Pesquisas sugerem que deficiências de folato cerebral podem estar associadas a certos sintomas do TEA.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Estudos clínicos, incluindo ensaios randomizados, demonstraram melhorias moderadas em habilidades de linguagem em um subgrupo de crianças com autismo que receberam suplementação de ácido folínico. No entanto, é essencial consultar um médico especializado antes de iniciar qualquer suplementação.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-400 transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Canabidiol (CBD)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  O CBD, um composto não psicoativo da cannabis, tem ganhado atenção por seu potencial em reduzir ansiedade, comportamentos desafiadores e crises epilépticas em pessoas autistas. Estudos preliminares mostram resultados promissores, especialmente em casos de autismo associado a epilepsia.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Pesquisas de 2024-2025 indicam que o CBD pode modular a resposta do sistema endocanabinoide, potencialmente melhorando a regulação emocional e a interação social. Contudo, a pesquisa ainda está em estágios iniciais, e a dosagem e segurança a longo prazo requerem mais investigação. Sempre consulte um profissional de saúde qualificado.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 md:col-span-2">
              <CardHeader>
                <CardTitle className="text-2xl">Abordagens Terapêuticas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Além de medicações, terapias comportamentais como ABA (Análise do Comportamento Aplicada), terapia ocupacional, fonoaudiologia e intervenções sensoriais são fundamentais. Abordagens integrativas que combinam terapias convencionais com suporte nutricional e atividades físicas têm mostrado resultados positivos no desenvolvimento global de crianças autistas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO: Benefícios do Autismo */}
      <section id="benefits" className="py-20 px-4 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center space-x-3 mb-6">
              <Sparkles className="h-12 w-12 text-yellow-500" />
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Além dos desafios, o autismo traz superpoderes
              </h2>
              <Sparkles className="h-12 w-12 text-yellow-500" />
            </div>
            <p className="text-2xl text-gray-700 font-medium mb-4">
              Veja como enriquece vidas!
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Em um mundo que frequentemente foca nas dificuldades do Transtorno do Espectro Autista (TEA), é hora de mudarmos a narrativa. Celebrar a neurodiversidade significa reconhecer que cérebros autistas não são "defeituosos", mas sim conectados de uma forma única, trazendo um conjunto extraordinário de habilidades e perspectivas que podem enriquecer profundamente a vida de crianças, famílias e da sociedade como um todo.
            </p>
          </div>

          {/* Habilidades Únicas das Crianças */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">As Habilidades Únicas das Crianças Autistas</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1: Hiperfoco */}
              <Card className="border-2 border-orange-300 hover:shadow-xl transition-all cursor-pointer" onClick={() => toggleCard("hyperfocus")}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Lightbulb className="h-10 w-10 text-orange-500" />
                    {expandedCards["hyperfocus"] ? <ChevronUp className="h-6 w-6 text-gray-500" /> : <ChevronDown className="h-6 w-6 text-gray-500" />}
                  </div>
                  <CardTitle className="text-2xl text-orange-700">Hiperfoco Intenso</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    A capacidade de mergulhar profundamente em tópicos de interesse é uma marca registrada. Isso transforma crianças em verdadeiros especialistas, seja em dinossauros, sistemas solares ou programação.
                  </p>
                  {expandedCards["hyperfocus"] && (
                    <div className="mt-4 space-y-3">
                      <img src="/hiperfoco_crianca_dinossauros.png" alt="Criança focada em livro de dinossauros" className="w-full rounded-lg" />
                      <p className="text-gray-700 leading-relaxed">
                        Essa paixão focada é um motor para o aprendizado e a maestria, uma habilidade que muitas empresas inovadoras, como a SAP e a Microsoft, já estão buscando ativamente em seus programas de neurodiversidade.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Card 2: Criatividade */}
              <Card className="border-2 border-purple-300 hover:shadow-xl transition-all cursor-pointer" onClick={() => toggleCard("creativity")}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <svg className="h-10 w-10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <path d="M 50 15 Q 35 15 25 27 Q 15 39 15 50 Q 15 60 22 68 L 22 75 L 35 75 L 35 85 L 65 85 L 65 75 L 78 75 L 78 68 Q 85 60 85 50 Q 85 39 75 27 Q 65 15 50 15 Z" fill="none" stroke="#FFA500" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="50" cy="55" r="3" fill="#FFA500"/>
                    </svg>
                    {expandedCards["creativity"] ? <ChevronUp className="h-6 w-6 text-gray-500" /> : <ChevronDown className="h-6 w-6 text-gray-500" />}
                  </div>
                  <CardTitle className="text-2xl text-purple-700">Criatividade Sensorial</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    A sensibilidade sensorial aguçada pode ser a fonte de uma criatividade imensa. Crianças autistas percebem o mundo com uma riqueza de detalhes que escapa aos neurotípicos.
                  </p>
                  {expandedCards["creativity"] && (
                    <div className="mt-4 space-y-3">
                      <img src="/crianca_autista_pintando.png" alt="Criança autista pintando" className="w-full rounded-lg" />
                      <p className="text-gray-700 leading-relaxed">
                        Elas literalmente veem e ouvem o mundo de uma forma diferente, criando arte que reflete essa perspectiva única, resultando em expressões artísticas e musicais inovadoras.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Card 3: Memória */}
              <Card className="border-2 border-blue-300 hover:shadow-xl transition-all cursor-pointer" onClick={() => toggleCard("memory")}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Brain className="h-10 w-10 text-blue-600" />
                    {expandedCards["memory"] ? <ChevronUp className="h-6 w-6 text-gray-500" /> : <ChevronDown className="h-6 w-6 text-gray-500" />}
                  </div>
                  <CardTitle className="text-2xl text-blue-700">Memória Excepcional</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Estudos do PubMed (2024-2025) confirmam: indivíduos autistas frequentemente superam os neurotípicos em tarefas que envolvem memória visual e reconhecimento de padrões.
                  </p>
                  {expandedCards["memory"] && (
                    <div className="mt-4 space-y-3">
                      <img src="/autismo_memoria_padroes.png" alt="Reconhecimento de padrões" className="w-full rounded-lg" />
                      <p className="text-gray-700 leading-relaxed">
                        Essa habilidade não se limita a lembrar datas ou fatos; é a capacidade de ver a estrutura subjacente em sistemas complexos, uma vantagem poderosa em campos como matemática, engenharia e análise de dados.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Card 4: Honestidade */}
              <Card className="border-2 border-green-300 hover:shadow-xl transition-all cursor-pointer" onClick={() => toggleCard("honesty")}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">✓</span>
                    </div>
                    {expandedCards["honesty"] ? <ChevronUp className="h-6 w-6 text-gray-500" /> : <ChevronDown className="h-6 w-6 text-gray-500" />}
                  </div>
                  <CardTitle className="text-2xl text-green-700">Honestidade e Lógica</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    A comunicação direta e a lealdade à verdade são traços comuns que trazem uma clareza refrescante às interações sociais.
                  </p>
                  {expandedCards["honesty"] && (
                    <div className="mt-4 space-y-3">
                      <img src="/neurodiversidade_trabalho.png" alt="Equipe neurodiversa trabalhando" className="w-full rounded-lg" />
                      <p className="text-gray-700 leading-relaxed">
                        Em um mundo complexo, a capacidade de abordar problemas com lógica pura, sem o filtro das complexidades sociais, leva a soluções mais eficientes e inovadoras. Um estudo da Harvard Business Review destacou que equipes com diversidade neurológica podem ser até 30% mais produtivas e inovadoras.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Força Transformadora nas Famílias */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">A Força Transformadora nas Famílias</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Card: Crescimento Emocional */}
              <Card className="border-2 border-pink-300 hover:shadow-xl transition-all cursor-pointer" onClick={() => toggleCard("emotional")}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Heart className="h-10 w-10 text-pink-500" />
                    {expandedCards["emotional"] ? <ChevronUp className="h-6 w-6 text-gray-500" /> : <ChevronDown className="h-6 w-6 text-gray-500" />}
                  </div>
                  <CardTitle className="text-2xl text-pink-700">Crescimento Emocional e Empatia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    A necessidade de compreender uma forma diferente de ser e se comunicar cultiva um nível de empatia e paciência que transforma as relações.
                  </p>
                  {expandedCards["emotional"] && (
                    <div className="mt-4 space-y-3">
                      <img src="/familia_autismo_atividade_sensorial.png" alt="Família feliz em atividade sensorial" className="w-full rounded-lg" />
                      <p className="text-gray-700 leading-relaxed italic">
                        "Meu filho autista me ensinou o verdadeiro significado da paciência infinita e do amor incondicional."
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        As rotinas, essenciais para muitas crianças autistas, acabam por fortalecer os laços familiares, criando rituais de conexão e segurança.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Card: Resiliência */}
              <Card className="border-2 border-indigo-300 hover:shadow-xl transition-all cursor-pointer" onClick={() => toggleCard("resilience")}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Users className="h-10 w-10 text-indigo-600" />
                    {expandedCards["resilience"] ? <ChevronUp className="h-6 w-6 text-gray-500" /> : <ChevronDown className="h-6 w-6 text-gray-500" />}
                  </div>
                  <CardTitle className="text-2xl text-indigo-700">Resiliência e Advocacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Famílias de autistas frequentemente se tornam defensoras apaixonadas, não apenas para seus filhos, mas para toda a comunidade.
                  </p>
                  {expandedCards["resilience"] && (
                    <div className="mt-4 space-y-3">
                      <p className="text-gray-700 leading-relaxed">
                        Elas lideram movimentos, criam redes de apoio como a "Autismo Positivo" no Brasil, e impulsionam a mudança social. Um estudo da ONU em 2025 revelou que 70% das famílias relataram sentir-se "mais unidas e resilientes" após a jornada de adaptação.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Criar uma criança autista expande a percepção da família sobre o que é "normal" e celebra a diversidade humana em sua forma mais pura. A família aprende a valorizar pequenas vitórias, a encontrar alegria na rotina e a ver o mundo através de uma lente de aceitação e admiração pelas diferenças.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Links de Monetização */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Aprofunde seu Conhecimento</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="https://www.amazon.com.br/Neurotribos-Legado-Autismo-Futuro-Neurodiversidade/dp/8535928073"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 border-2 border-blue-300 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <h5 className="text-xl font-bold text-blue-700 mb-2">📚 Neurotribos - Steve Silberman</h5>
                <p className="text-gray-700">Explore a rica história do autismo e da neurodiversidade. Disponível na Amazon.</p>
              </a>
              <a
                href="https://www.hotmart.com/pt-br/marketplace/produtos/criancas-autistas-despertando-talentos"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 border-2 border-purple-300 rounded-lg hover:border-purple-500 hover:shadow-lg transition-all"
              >
                <h5 className="text-xl font-bold text-purple-700 mb-2">🎓 Crianças Autistas: Despertando Talentos</h5>
                <p className="text-gray-700">Curso prático para potencializar as habilidades do seu filho. Disponível na Hotmart.</p>
              </a>
            </div>
          </div>

          {/* CTA Instagram */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-8 text-center text-white shadow-xl">
            <h4 className="text-3xl font-bold mb-4">Junte-se à nossa comunidade!</h4>
            <p className="text-xl mb-6">
              Sua história é poderosa. Ela pode inspirar, educar e transformar a percepção de outras pessoas sobre o autismo.
            </p>
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6"
              onClick={() => window.open("https://instagram.com/meumundoinblue", "_blank")}
            >
              <Instagram className="mr-2 h-6 w-6" />
              Compartilhe sua história no @meumundoinblue
            </Button>
          </div>
        </div>
      </section>

      {/* Inovações 2025 Section */}
      <section id="innovations" className="py-20 px-4 bg-white">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <Sparkles className="h-16 w-16 mx-auto text-yellow-500 mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Inovações em 2025</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O futuro do autismo é brilhante, impulsionado por avanços tecnológicos, pesquisas inovadoras e uma mudança cultural em direção à aceitação.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-yellow-400 transition-all">
              <CardHeader>
                <CardTitle className="text-xl">Tecnologia Assistiva</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Aplicativos de comunicação aumentativa e alternativa (CAA), dispositivos de rastreamento ocular e realidade virtual estão revolucionando a forma como pessoas autistas se comunicam e aprendem.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-yellow-400 transition-all">
              <CardHeader>
                <CardTitle className="text-xl">Pesquisa Genética</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Avanços em genômica estão identificando variantes genéticas associadas ao autismo, permitindo diagnósticos mais precoces e intervenções personalizadas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-yellow-400 transition-all">
              <CardHeader>
                <CardTitle className="text-xl">Inclusão no Trabalho</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Programas de neurodiversidade em empresas líderes como SAP, Microsoft e Google estão provando que a inclusão não é apenas ética, mas também lucrativa e inovadora.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container max-w-6xl text-center">
          <div className="mb-6">
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">M</span>
              </div>
              <span className="text-2xl font-bold">Meu Mundo inBlue</span>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Celebrando a neurodiversidade e transformando vidas através da conscientização, suporte e inovação.
            </p>
          </div>
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://instagram.com/meumundoinblue"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="h-8 w-8" />
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 Meu Mundo inBlue. Todos os direitos reservados. | Conteúdo baseado em pesquisas científicas de 2024-2025.
          </p>
        </div>
      </footer>
    </div>
  );
}
