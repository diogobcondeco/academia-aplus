import { Icon } from "@iconify/react";

type SocialNetworksProps = {
  iconSizeClassName?: string;
};

export default function SocialNetworks({
  iconSizeClassName = "text-2xl",
}: SocialNetworksProps) {
  return (
    <div className="flex justify-center items-center gap-4">
      <a
        href="https://www.instagram.com/academia_a_mais"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon={"mdi:instagram"} className={iconSizeClassName} />
      </a>
      <a
        href="https://www.facebook.com/share/17GLShq1pt/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon={"mdi:facebook"} className={iconSizeClassName} />
      </a>
    </div>
  );
}
