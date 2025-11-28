import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const lessons = [
    {
      id: 1,
      title: "Математика",
      icon: "Calculator",
      color: "bg-primary",
      emoji: "🔢",
      description: "Учись считать весело!"
    },
    {
      id: 2,
      title: "Русский язык",
      icon: "BookOpen",
      color: "bg-secondary",
      emoji: "📚",
      description: "Читай и пиши правильно"
    },
    {
      id: 3,
      title: "Английский",
      icon: "Globe",
      color: "bg-accent",
      emoji: "🌍",
      description: "Говори на английском!"
    },
    {
      id: 4,
      title: "Наука",
      icon: "Atom",
      color: "bg-purple-500",
      emoji: "🔬",
      description: "Открывай мир науки"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted to-background">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12 animate-bounce-in">
          <div className="flex items-center justify-center gap-8 mb-6">
            <img 
              src="https://cdn.poehali.dev/files/c986fa89-9e84-4a08-a06b-fb637eaead71.png" 
              alt="Roblox персонаж" 
              className="w-24 h-24 md:w-32 md:h-32 rounded-2xl shadow-2xl animate-float hover:scale-110 transition-transform"
            />
            <img 
              src="https://cdn.poehali.dev/files/86d46822-cb2a-4b1f-a9bf-a59b75229d1a.png" 
              alt="Mario персонаж" 
              className="w-24 h-24 md:w-32 md:h-32 rounded-2xl shadow-2xl animate-float hover:scale-110 transition-transform"
              style={{ animationDelay: '0.5s' }}
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
            Учись играя! 🚀
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Твои друзья готовы помочь тебе в учёбе
          </p>
          <Button 
            size="lg" 
            className="text-xl px-8 py-6 rounded-2xl shadow-xl hover:scale-105 transition-transform"
          >
            Начать обучение
            <Icon name="Rocket" className="ml-2" size={24} />
          </Button>
        </header>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-10 text-foreground">
            Выбери свой урок 📖
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lessons.map((lesson, index) => (
              <Card 
                key={lesson.id}
                className="hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl border-4 hover:shadow-2xl animate-bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div 
                    className={`${lesson.color} w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-4xl">{lesson.emoji}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    {lesson.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {lesson.description}
                  </p>
                  <Button 
                    className="w-full rounded-xl"
                    variant="outline"
                  >
                    Перейти к уроку
                    <Icon name="ArrowRight" className="ml-2" size={20} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl border-4 animate-bounce-in">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Готов к приключениям? 🎮
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Присоединяйся к Mario и Roblox персонажу в увлекательном путешествии по миру знаний!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="rounded-2xl px-8 py-6 text-lg"
                variant="default"
              >
                <Icon name="Star" className="mr-2" size={20} />
                Начать игру
              </Button>
              <Button 
                size="lg" 
                className="rounded-2xl px-8 py-6 text-lg"
                variant="secondary"
              >
                <Icon name="Trophy" className="mr-2" size={20} />
                Мои достижения
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
