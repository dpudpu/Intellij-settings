import * as React from 'react';

function $NAME(#if($PROP_TYPES)props: $PROP_TYPES#end) {
  return $COMPONENT_BODY
}

#if($DEFAULT_PROPS)
  $!{NAME}.defaultProps = $DEFAULT_PROPS
#end