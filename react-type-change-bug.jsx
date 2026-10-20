// Code block C: Rule 1 bug, type change loses state (Scene 7.4)
function Board({ isMobile }) {
  // Switching between div and section = different tree.
  // React throws away CardSearch and whatever the user typed.
  return isMobile
    ? <div><CardSearch /></div>
    : <section><CardSearch /></section>;
}

// Fix: keep the same element type and change only props or styles.
function BoardFixed({ isMobile }) {
  return (
    <section className={isMobile ? 'mobile' : 'desktop'}>
      <CardSearch />
    </section>
  );
}
