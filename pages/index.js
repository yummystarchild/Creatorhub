
export default function Home() {
  return (
    <div className="container">
      <video autoPlay loop muted className="background-video">
        <source src="/shimmer.mp4" type="video/mp4" />
      </video>
      <h1>Welcome to CreatorHub</h1>
      <p>Our Agents. Infinite Possibilities.</p>
    </div>
  )
}
