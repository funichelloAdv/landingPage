export default function WhatsappButton() {
  return (
    <a
      className="fixed bottom-8 right-8 z-10 h-20 w-20 cursor-pointer"
      target="_blank"
      href="https://api.whatsapp.com/send?phone=5516994510470&text=Olá, estou entrando em contato através do site."
      rel="noreferrer"
    >
      <img src={'/static/images/whatsapp-icon.png'} />
    </a>
  )
}
