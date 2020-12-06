import * as React from 'react';

class $!NAME extends Component#if($PROP_TYPES)<$PROP_TYPES>#end {
  #if($DEFAULT_PROPS)
    static defaultProps = $DEFAULT_PROPS
  #end
  render() {
    return $COMPONENT_BODY
  }
}