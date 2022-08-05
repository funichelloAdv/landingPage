import FloatingWhatsApp from 'react-floating-whatsapp'

export default function WhatsappButton() {
  return (
    <FloatingWhatsApp
      accountName="Atendimento"
      phoneNumber="5516988213242"
      statusMessage=""
      chatMessage="Olá, como podemos te ajudar hoje?"
      placeholder="Escreva uma mensagem..."
    />
  )
}
