export function setImg(imginfo) {
  const uuid = () => {
    let dt = new Date().getTime();
    return dt;
  };
  return {
    ...imginfo,
    uuid: uuid,
  };
}
