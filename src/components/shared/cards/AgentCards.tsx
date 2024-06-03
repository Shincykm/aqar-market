import Image from "next/image";
import React from "react";
import RoundLinks from "../links/RoundLinks";

const AgentCards = ({ agentData, direction="row" }) => {
    const { email, first_name, last_name, phone_number, whatsapp_number, profile_picture } =  agentData?.user   ||{};

  return (
    <div className={`flex justify-between ${direction === "row" ? "" : 'flex-col gap-4'}`}>
      <div className="flex items-center pt-4">
        <div className="flex-shrink-0">
          {profile_picture ? (
            <Image
              className="rounded-full w-auto h-auto"
              width={56}
              height={56}
              src={profile_picture}
              alt={`${first_name} ${last_name}`}
            />
          ) : (
            <Image
              className="rounded-full w-auto h-auto border-[1px] border-black"
              width={56}
              height={56}
              src={'/images/agents/no_profile.jpg'}
              alt={"agent-image-missing"}
            />
          )}
        </div>
        
        <div className="flex-1 min-w-0 ms-4 font-objective">
          <p className="text-sm text-gray-300">Agent</p>
          <p className="text-sm">
            {(first_name || last_name) ? `${first_name || ""} ${last_name || ""}` : 'Agent Unavailable' }
          </p>
        </div>
      </div>

      <div className="inline-flex gap-2 items-center text-base font-semibold">
        {phone_number && <RoundLinks
          link={`mailto:${phone_number}`}
          // bgcolor="secondary-gray"
          img={"/icons/ic_call.svg"}
          name={"call"}
        />}
        {email && <RoundLinks
          link={`tel:${email}`}
          // bgcolor="secondary-gray"
          img={"/icons/ic_email.svg"}
          name={"email"}
        />}
        {whatsapp_number && <RoundLinks
          link={`https://wa.me/${whatsapp_number}`}
          // bgcolor="secondary-gray"
          img={"/icons/ic_whatsapp.svg"}
          name={"whatsapp"}
        />}
      </div>
    </div>
  );
};

export default AgentCards;
