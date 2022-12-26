import Link from "next/link";
import Buttonpagination from "components/UI/Buttonbase/Buttonpaginiation";

const LinkButton = ({ as, href, anchorProps = {}, buttonProps = {} }) => (
  <>
    <Link passHref as={as} href={href}>
      <a {...anchorProps}>
        <Buttonpagination {...buttonProps} />
      </a>
    </Link>
  </>
);

export default LinkButton;
