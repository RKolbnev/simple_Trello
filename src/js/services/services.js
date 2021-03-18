const getData = async (link) => {
  let data = await fetch(link);
  if (!data.ok) {
    throw new Error(`Could not fetch ${link}, status: ${data.status}`);
  }

  return await data.json();
};

const postData = async (link, data) => {
  await fetch(link, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  });
};

const deletData = async (link, id) => {
  link = link.replace(/\.json/, `/${id}.json`);
  const res = await fetch(link, { method: "DELETE" });
  if (res.ok) {
    console.log("Task is delete");
  }
};

const putData = async (link, id, data) => {
  link = link.replace(/\.json/, `/${id}.json`);
  const res = await fetch(link, {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  });
  if (res.ok) {
    console.log("Task is change");
  }
};

export { postData };
export { getData };
export { deletData };
export { putData };
