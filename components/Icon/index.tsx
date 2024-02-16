import React from "react";
import UserTick, {SVGProps} from './UserTick'
import Users from './Users'
import Star from './Star'
import Document from './Document'
import Share from './Share'
import Eye from './Eye'
import Heart from './Heart'

const Icon = (props: SVGProps & { name: string }) => {
  switch (props.name) {
    case "user-tick":
      return <UserTick {...props} />;
    case "users":
      return <Users {...props} />;
    case "star":
      return <Star {...props} />;
    case "document":
      return <Document {...props} />;
    case "share":
      return <Share {...props} />;
    case "eye":
      return <Eye {...props} />;
    case "heart":
      return <Heart {...props} />;
    default:
      return;
  }
};

export default Icon;
