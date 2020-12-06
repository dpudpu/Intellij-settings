import * as React from 'react';

function $!NAME(#if($HAS_PROPS)props#end) {
  return $COMPONENT_BODY
}

#if($PROP_TYPES)
$!{NAME}.propTypes = $PROP_TYPES
#end

#if($DEFAULT_PROPS)
  $!{NAME}.defaultProps = $DEFAULT_PROPS
#end