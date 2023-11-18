import { Icons } from "../../constants/enums";
import IconArrowLeft from "./SvgIcons/IconArrowLeft";
import IconChatLeftDotsFill from "./SvgIcons/IconChat";
import IconCopy from "./SvgIcons/IconCopy";
import IconEarbuds from "./SvgIcons/IconEarBuds";
import IconEmoji from "./SvgIcons/IconEmoji";
import IconBxMicrophone from "./SvgIcons/IconMicrophone";
import IconPushpin from "./SvgIcons/IconPin";
import IconPlus from "./SvgIcons/IconPlus";
import IconPlusCircle from "./SvgIcons/IconPlusCircle";
import IconCross1 from "./SvgIcons/IconX";

import "./Icon.css";

interface IconProps {
  className: string;
  icon: Icons;
}

export default function Icon({ className, icon }: IconProps) {
  if (icon === Icons.PLUS_CIRCLED_FILL) {
    return <IconPlusCircle className={className} />;
  }
  if (icon === Icons.PLUS) return <IconPlus className={className} />;
  if (icon === Icons.COPY) return <IconCopy className={className} />;
  if (icon === Icons.PIN) return <IconPushpin className={className} />;
  if (icon === Icons.LEFT_ARROW) return <IconArrowLeft className={className} />;
  if (icon === Icons.REACTION) return <IconEmoji className={className} />;
  if (icon === Icons.MICROPHONE) {
    return <IconBxMicrophone className={className} />;
  }
  if (icon === Icons.EARPHONES) return <IconEarbuds className={className} />;
  if (icon === Icons.GEAR) return <IconEarbuds className={className} />;
  if (icon === Icons.CROSS) return <IconCross1 className={className} />;
  if (icon === Icons.CHAT) {
    return <IconChatLeftDotsFill className={className} />;
  }
  return <></>;
}
