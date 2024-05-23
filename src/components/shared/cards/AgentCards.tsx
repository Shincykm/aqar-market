import Image from 'next/image'
import React from 'react'
import RoundLinks from '../Links/RoundLinks'

const AgentCards = ({agentData}) => {
    
  return (
    <div className="flex items-center pt-4">
        <div className="flex-shrink-0">
            <Image className="rounded-full w-auto h-auto" width={56} height={56} src={agentData.imageUrl} alt={agentData.agentName}/>
        </div>
        <div className="flex-1 min-w-0 ms-4 font-objective">
            <p className="text-sm text-gray-300">
                {"agent"}
            </p>
            <p className="text-sm">
                {agentData.agentName}
            </p>
        </div>
        <div className="inline-flex gap-2 items-center text-base font-semibold">
            <RoundLinks 
                link = {"#"}
                bgcolor= "secondary-gray"
                img = {"/icons/ic_call.svg"}
                name = {"call"}
            />
            <RoundLinks 
                link = {"#"}
                bgcolor= "secondary-gray"
                img = {"/icons/ic_email.svg"}
                name ={"email"}
            />
            <RoundLinks 
                link = {"#"}
                bgcolor= "secondary-gray"
                img = {"/icons/ic_whatsapp.svg"}
                name ={"whatsapp"}
            />
            
        </div>
    </div>
  )
}

export default AgentCards