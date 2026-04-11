import { ArrowRightIcon, MailIcon } from "lucide-react"

import { Button } from "@/components/base/ui/button"
import { SERVICE_OFFERINGS } from "@/features/portfolio/data/service-offerings"
import { USER } from "@/features/portfolio/data/user"
import { decodeEmail } from "@/utils/string"

import { CollaborationItem } from "./collaboration-item"
import { Panel, PanelDescription, PanelHeader, PanelTitle } from "./panel"

const EMAIL = decodeEmail(USER.email)

export function Collaboration() {
  return (
    <Panel id="collaboration">
      <PanelHeader>
        <PanelTitle>Collaboration</PanelTitle>
        <PanelDescription>
          The most valuable ways I can support teams building AI-powered,
          backend-intensive products.
        </PanelDescription>
      </PanelHeader>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-md:hidden md:grid-cols-3">
          <div className="border-r border-line" />
          <div className="border-x border-line" />
          <div className="border-l border-line" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {SERVICE_OFFERINGS.map((item) => (
            <CollaborationItem key={item.title} item={item} />
          ))}
        </div>
      </div>

      <div className="-mt-px flex flex-wrap items-center justify-center gap-2 px-4 py-2">
        <Button
          className="gap-2 border-none pr-2.5 pl-3"
          size="sm"
          nativeButton={false}
          render={<a href={`mailto:${EMAIL}`} />}
        >
          Discuss a Project
          <MailIcon />
        </Button>
        <Button
          className="gap-2 border-none pr-2.5 pl-3"
          variant="outline"
          size="sm"
          nativeButton={false}
          render={
            <a
              href="https://github.com/lyminhnghia"
              target="_blank"
              rel="noopener"
            />
          }
        >
          View GitHub
          <ArrowRightIcon />
        </Button>
      </div>
    </Panel>
  )
}
