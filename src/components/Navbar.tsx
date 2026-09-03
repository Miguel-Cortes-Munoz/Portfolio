type NavbarProps = {
  name: string
}

export default function Navbar({ name }: NavbarProps) {
  return (
    <nav>
      <h1>{name}</h1 >

      <div>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}