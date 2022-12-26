import { Buttonbase } from "components/UI/Buttonbase/Buttonbase";
import styled from "styled-components";

const ButtonMain = styled(Buttonbase)`
  padding: 6px 16px;
  min-width: 96px;
  min-height: 48px;
  user-select: none;
  font-weight: 500;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.paletteprimarycontrasttext};
  position: relative;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.paletteprimarymain};
`;
const SpanMain = styled.span`
  width: 100%;
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
`;
const Buttonpagination = ({
  title,
  startIcon,
  endIcon,
  disabled,
  loading,
  ...rest
}) => (
  <>
    <ButtonMain className="button" disabled={disabled || loading} {...rest}>
      <SpanMain className="button-label">
        {startIcon && (
          <span
            style={{
              display: "inherit",
              marginRight: "8px",
            }}
          >
            {startIcon}
          </span>
        )}
        {title}
        {endIcon && (
          <span
            style={{
              display: "inherit",
              marginLeft: "8px",
            }}
          >
            {endIcon}
          </span>
        )}
      </SpanMain>
    </ButtonMain>
  </>
);

export default Buttonpagination;
