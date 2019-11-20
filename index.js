function memeCase(str) {
  let upper = false;
  const lower = str.toLowerCase();
  const characters = [...str].map(s => {
    const c = upper ? s.toUpperCase() : s.toLowerCase();
    upper = !upper;
    return c;
  }).join('');
  return characters;
}
