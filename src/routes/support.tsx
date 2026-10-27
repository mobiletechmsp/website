import { createFileRoute } from '@tanstack/react-router'
import { CustomerSupport } from '@/components/CustomerSupport'

export const Route = createFileRoute('/support')({
  head: () => ({
    meta: [
      { title: 'Customer Support | MobileTech MSP' },
      {
        name: 'description',
        content:
          'Existing MobileTech MSP customers: start a support ticket, check a ticket status, book an appointment, or sign in to the client portal.',
      },
    ],
  }),
  component: Support,
})

function Support() {
  return <CustomerSupport />
}
