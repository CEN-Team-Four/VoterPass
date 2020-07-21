import React from 'react';

import './index.css';
import ListGroup from 'react-bootstrap/ListGroup';

const Help = () => {
   const noActive = (e) => {
      e.target.classList.toggle("active");
      //const currentState = component.state.active;
      //component.setState({ active: !currentState });
   };

   return (
      <div className="help-container">
         <ListGroup className="help-navigation-links">
            <ListGroup.Item action variant="light" href="#a">Light item</ListGroup.Item>
            <ListGroup.Item action variant="dark" href="#b">Dark item</ListGroup.Item>
            <ListGroup.Item action variant="light" href="#c">Light item</ListGroup.Item>
            <ListGroup.Item action variant="dark" href="#d">Dark item</ListGroup.Item>
            <ListGroup.Item action variant="light" href="#e">Light item</ListGroup.Item>
            <ListGroup.Item action variant="dark" href="#f">Dark item</ListGroup.Item>
         </ListGroup>

         <div className="help-feed">
            <h1>Help and Instructions</h1>
            <p>These are the instructions for this application.
               <br/>
               <br/>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla ac augue sit amet sagittis. Donec quis convallis orci. Donec enim dui, tempus nec tincidunt vitae, iaculis porttitor nisl. Maecenas dapibus augue vestibulum lorem mollis, sit amet elementum mi condimentum. Morbi porttitor pulvinar ante, vel bibendum ex lacinia mattis. Sed sit amet ex tincidunt, malesuada erat a, ullamcorper elit. Cras venenatis nulla pellentesque nisi laoreet maximus. Cras aliquam velit dictum ante cursus dapibus. Sed tristique eleifend sagittis. Phasellus eleifend lorem pharetra, porttitor erat eu, feugiat eros. Aenean tristique lacinia elit nec dapibus. Vivamus eget sollicitudin massa, at dictum justo.

Curabitur sit amet ultricies erat. Mauris eget mi diam. Nam aliquet, nibh eu condimentum ullamcorper, lacus diam aliquam purus, sed aliquet ipsum metus sit amet odio. Fusce a erat vitae nunc tempor efficitur eget sit amet nibh. Fusce tincidunt nulla tristique, sollicitudin augue vel, interdum sapien. Sed non finibus est. Cras non massa vel ipsum ultrices ultrices. Morbi risus lorem, ornare in lorem quis, dictum sollicitudin diam. Suspendisse egestas nunc lectus, sit amet ultrices purus rutrum accumsan. Etiam vel fermentum felis, vel dictum nisi. Nullam elementum ligula ac pharetra finibus. Mauris lectus neque, porta nec dui a, congue tempor nisl. Duis egestas felis et imperdiet auctor. Praesent interdum orci a urna sollicitudin, eu pretium erat iaculis. Morbi nisl turpis, imperdiet vitae dolor id, finibus vestibulum odio. Etiam ornare nisl id mauris fermentum, in elementum turpis varius.

Suspendisse at elit sed justo pretium pharetra at nec justo. Nullam hendrerit tincidunt nulla non aliquet. Nunc egestas dictum leo non consectetur. Sed mattis metus non risus pulvinar commodo. Ut iaculis, lectus euismod luctus tincidunt, velit ipsum fermentum nunc, vitae sollicitudin sapien urna non dui. Praesent quis nisl et nulla molestie varius. Curabitur sem ligula, rutrum a pulvinar ac, vehicula in ipsum.

Duis rutrum eros ac urna pellentesque interdum. Quisque pretium in neque ut dignissim. Curabitur convallis pellentesque sapien nec convallis. Etiam in ligula ac leo mollis cursus eu in ex. Proin placerat efficitur odio, sit amet faucibus nisl hendrerit ut. Vivamus non semper ex. Ut scelerisque a urna eget finibus. Pellentesque non augue sodales, ullamcorper enim at, pellentesque sem. Mauris aliquet ipsum at hendrerit elementum. Proin sagittis pulvinar ex, vitae hendrerit lorem vehicula sed. Vivamus nisi felis, pellentesque vel placerat at, rutrum fringilla urna. Maecenas aliquam felis in porttitor ornare. In hac habitasse platea dictumst.

Duis ut consectetur massa. Nunc lobortis pellentesque nibh eget imperdiet. Phasellus vel tellus cursus, posuere nisl sed, malesuada tortor. In turpis purus, accumsan in eleifend eu, venenatis eget libero. Integer hendrerit venenatis sem, et tempus leo posuere in. In aliquet congue nunc, vel feugiat velit iaculis non. Proin sollicitudin lacinia lorem semper egestas. Nunc mi urna, blandit vitae hendrerit ut, egestas eget ex. Integer congue felis erat, vel venenatis sem sodales eu. Quisque venenatis metus quam, nec elementum dui congue a. Mauris condimentum pulvinar risus sit amet faucibus. Pellentesque in metus bibendum libero lobortis efficitur.
            </p>
         </div>
      </div>
   );
}

export default Help;