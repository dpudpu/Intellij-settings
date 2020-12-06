import * as React from 'react';

class $!NAME extends Component {
  render() {
    return $COMPONENT_BODY
  }
}

#if($PROP_TYPES)
$!{NAME}.propTypes = $PROP_TYPES
#end

#if($DEFAULT_PROPS)
  $!{NAME}.defaultProps = $DEFAULT_PROPS
#end