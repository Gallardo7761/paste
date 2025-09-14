import React from 'react';
import { Link } from 'react-router-dom';
import '@/css/Home.css';
import CustomContainer from '@/components/CustomContainer';
import ContentWrapper from '@/components/ContentWrapper';
import CustomCarousel from '@/components/CustomCarousel';

const Home = () => {
  return (
    <CustomContainer>
      <h1>Título aquí 🐧</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu tristique elit. Nullam lorem turpis, cursus in augue id, dignissim rhoncus dolor. Suspendisse vitae elit et orci auctor rutrum. Sed lobortis iaculis dapibus. Mauris vel dapibus elit. In risus est, lobortis ut scelerisque at, luctus pretium lorem. Vestibulum condimentum erat ut sagittis commodo. Nulla facilisi. Praesent vel dolor molestie, molestie ipsum ut, efficitur est. Nulla rutrum pulvinar eros, a faucibus orci vehicula sed. In tincidunt in sapien vel convallis. Aliquam nec leo sit amet libero efficitur imperdiet ac sit amet leo. Vivamus ex tellus, tempor aliquam orci eu, eleifend tempus odio.
      </p><p>
        Aliquam mollis sollicitudin pharetra. Quisque malesuada, nulla nec sodales consequat, nulla felis imperdiet metus, auctor aliquet lacus urna vel neque. Cras cursus nisl eu erat vehicula, sed semper turpis porttitor. Fusce ut lectus a erat gravida ullamcorper ut ut neque. Pellentesque rutrum, nibh vitae egestas ullamcorper, justo dolor hendrerit magna, in rhoncus ante magna at velit. Fusce cursus, ante sed dictum gravida, ex lacus pulvinar libero, quis egestas sapien leo id nisi. In eget vestibulum ante. Vivamus venenatis eros lorem, ac tincidunt tortor elementum at.
      </p>
    </CustomContainer>
  );
};

export default Home;
