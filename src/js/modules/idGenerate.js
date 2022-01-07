const idGenerate = () => {
  const id = String(Math.random())
              .split('')
              .map(i => {
                if (i == '.') {
                  return '_'
                } else {
                  return String.fromCharCode(+i + 66);
                }})
              .join('')
  return id;
}

export default idGenerate;