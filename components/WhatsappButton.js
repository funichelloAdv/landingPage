import FloatingWhatsApp from 'react-floating-whatsapp'

export default function WhatsappButton() {
  return (
    <FloatingWhatsApp
      accountName="Atendimento"
      phoneNumber="5516994510470"
      statusMessage=""
      chatMessage="Olá, como podemos te ajudar hoje?"
      placeholder="Escreva uma mensagem..."
    />
  )
}
