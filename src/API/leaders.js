export async function getLeaders() {
  try {
    const response = await fetch("https://wedev-api.sky.pro/api/leaderboard", {
      method: "GET",
    });
    const isResponseOk = response.ok;
    const result = await response.json();
    if (isResponseOk) {
      return result.leaders;
    } else {
      throw new Error(result.error);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

//добавление лидера в список
export const addLeader = async data => {
  const response = await fetch("https://wedev-api.sky.pro/api/leaderboard/", {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Упс, ошибка");
  }
  return response.json();
};
