import errorModal from '../modules/errorModal';

const getData = async (link, ...path) => {
  path = path.map((id) => `/${id}`).join("");
  link = link.replace(/\.json/, `${path}.json`);

  let data = await fetch(link);
  if (!data.ok) {
    errorModal('загрузить');
    throw new Error(`Could not fetch ${link}, status: ${data.status}`);
  }

  return await data.json();
};

const patchReq = async (link, body, ...path) => {
  path = path.map(id => `/${id}`).join('')
  link = link.replace(/\.json/, `${path}.json`);

  await fetch(link, {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(body),
  });
}

const deleteData = async (link, ...path) => {
  path = path.map((id) => `/${id}`).join("");
  link = link.replace(/\.json/, `/${path}.json`);

  const res = await fetch(link, { method: "DELETE" });
  if (res.ok) {
    console.log("Task is delete");
  } else {
    errorModal("удалить");
  }
};

export { getData };
export { patchReq };
export { deleteData };