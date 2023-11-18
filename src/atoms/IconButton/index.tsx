import "./IconButton.css";
import { LOADING_BTN_LABEL } from "../../constants/labels";
import { ReactNode } from "react";
import Icon from "../Icon";
import { ButtonVariant, Icons } from "../../constants/enums";
import clsx from "clsx";

import "./IconButton.css"

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  className: string;
  loading?: boolean;
  loadingLabel?: string;
  icon?: Icons;
  variant?: ButtonVariant;
  children?: ReactNode;
  iconClass?: string;
}

export function IconButton(props: ButtonProps) {
  const {
    className,
    loading = false,
    loadingLabel = LOADING_BTN_LABEL,
    variant = ButtonVariant.PRIMARY,
    icon,
    children,
    iconClass,
    ...defaultProps
  } = props;

  return (
    <button className={clsx("button", className, `.button--${variant}`)} {...defaultProps}>
      <div className="button-container">
        {icon && <Icon className="icon" icon={icon} />}
        {loading && loadingLabel}
        {!loading && children}
      </div>
    </button>
  );
}
