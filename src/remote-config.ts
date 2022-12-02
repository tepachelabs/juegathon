interface Config {
  live: boolean;
}

const URL =
  "https://notion-api.splitbee.io/v1/table/dba6a2456f224a78addb0da995b50f74";

export const fetchConfig = async (): Promise<Config> => {
  const response = await fetch(URL);
  const data = await response.json();

  return {
    live: data?.[0].value || false,
  };
};
