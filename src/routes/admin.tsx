import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { getLikesList } from "@/lib/likes.functions";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
});

function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [likes, setLikes] = useState<any[]>([]);
  const [error, setError] = useState("");
  const fetchLikes = useServerFn(getLikesList);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await fetchLikes({ data: { password } });
      setLikes(data);
      setIsAuthenticated(true);
      setError("");
    } catch (err) {
      setError("Неверный пароль");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
        <div className="w-full max-w-md space-y-8 rounded-xl border border-border bg-card p-8 shadow-lg">
          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-tight">Панель управления</h1>
            <p className="mt-2 text-sm text-muted-foreground">Введите пароль для просмотра статистики</p>
          </div>
          <form onSubmit={handleLogin} className="mt-8 space-y-6">
            <div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border border-border bg-background px-3 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Пароль"
              />
            </div>
            {error && <p className="text-sm text-destructive text-center">{error}</p>}
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Войти
            </button>
          </form>
          <div className="text-center">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
              ← Вернуться на сайт
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Статистика лайков</h1>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
            ← На главную
          </Link>
        </div>

        <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted text-muted-foreground uppercase text-xs font-semibold">
                <tr>
                  <th className="px-6 py-3">Дата</th>
                  <th className="px-6 py-3">Устройство / Браузер</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {likes.map((like) => (
                  <tr key={like.id} className="hover:bg-muted/50 transition-colors">
                    <td className="whitespace-nowrap px-6 py-4">
                      {format(new Date(like.created_at), "d MMMM yyyy, HH:mm", { locale: ru })}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground break-all max-w-md">
                      {like.user_agent || "Неизвестно"}
                    </td>
                  </tr>
                ))}
                {likes.length === 0 && (
                  <tr>
                    <td colSpan={2} className="px-6 py-12 text-center text-muted-foreground italic">
                      Лайков пока нет
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-4 text-sm text-muted-foreground">
          Всего лайков: <span className="font-semibold text-foreground">{likes.length}</span>
        </div>
      </div>
    </div>
  );
}
