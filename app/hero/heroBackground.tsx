export default function HeroBackground() {
  return (
    <>
      <div
        className="absolute pointer-events-none rounded-full -top-28 -left-20"
        style={{
          width: 520,
          height: 520,
          background:
            'radial-gradient(circle, rgba(30,144,255,0.13) 0%, transparent 70%)',
        }}
      />

      <div
        className="absolute pointer-events-none rounded-full -bottom-16 right-20"
        style={{
          width: 400,
          height: 400,
          background:
            'radial-gradient(circle, rgba(0,194,160,0.10) 0%, transparent 70%)',
        }}
      />

      <div
        className="absolute pointer-events-none rounded-full top-48 right-48"
        style={{
          width: 260,
          height: 260,
          background:
            'radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)',
        }}
      />
    </>
  );
}
