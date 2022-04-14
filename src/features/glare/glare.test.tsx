import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { OnMoveParams } from '../../react-parallax-tilt/types';
import { TiltTest } from '../../utils/TiltTest';

describe('Glare', () => {
  it('should calculate glare with top position', () => {
    const onMove = jest.fn();

    render(
      <TiltTest
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={-60}
        tiltAngleYManual={60}
        glareEnable={true}
        glareMaxOpacity={1}
        glarePosition="top"
        onMove={onMove}
      />,
    );

    userEvent.hover(screen.getByText('test'));

    expect(onMove).toBeCalledWith<[OnMoveParams]>({
      tiltAngleX: -60,
      tiltAngleY: 60,
      tiltAngleXPercentage: -100,
      tiltAngleYPercentage: 100,
      glareAngle: 45,
      glareOpacity: 1,
      eventType: 'mousemove',
    });
  });

  it('should calculate glare with right position', () => {
    const onMove = jest.fn();

    render(
      <TiltTest
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={0}
        tiltAngleYManual={60}
        glareEnable={true}
        glareMaxOpacity={1}
        glarePosition="right"
        onMove={onMove}
      />,
    );

    userEvent.hover(screen.getByText('test'));

    expect(onMove).toBeCalledWith<[OnMoveParams]>({
      tiltAngleX: 0,
      tiltAngleY: 60,
      tiltAngleXPercentage: 0,
      tiltAngleYPercentage: 100,
      glareAngle: 0,
      glareOpacity: 1,
      eventType: 'mousemove',
    });
  });

  it('should calculate glare with bottom position', () => {
    const onMove = jest.fn();

    render(
      <TiltTest
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={60}
        tiltAngleYManual={60}
        glareEnable={true}
        glareMaxOpacity={0.5}
        glarePosition="bottom"
        onMove={onMove}
      />,
    );

    userEvent.hover(screen.getByText('test'));

    expect(onMove).toBeCalledWith<[OnMoveParams]>({
      tiltAngleX: 60,
      tiltAngleY: 60,
      tiltAngleXPercentage: 100,
      tiltAngleYPercentage: 100,
      glareAngle: 135,
      glareOpacity: 0.5,
      eventType: 'mousemove',
    });
  });

  it('should calculate glare with left position', () => {
    const onMove = jest.fn();

    render(
      <TiltTest
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={-60}
        tiltAngleYManual={60}
        glareEnable={true}
        glareMaxOpacity={1}
        glarePosition="left"
        glareReverse={true}
        onMove={onMove}
      />,
    );

    userEvent.hover(screen.getByText('test'));

    expect(onMove).toBeCalledWith<[OnMoveParams]>({
      tiltAngleX: -60,
      tiltAngleY: 60,
      tiltAngleXPercentage: -100,
      tiltAngleYPercentage: 100,
      glareAngle: -135,
      glareOpacity: 1,
      eventType: 'mousemove',
    });
  });

  it('should calculate glare with all (sides) positions', () => {
    const onMove = jest.fn();

    render(
      <TiltTest
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={-60}
        tiltAngleYManual={-60}
        glareEnable={true}
        glareMaxOpacity={1}
        glarePosition="all"
        onMove={onMove}
      />,
    );

    userEvent.hover(screen.getByText('test'));

    expect(onMove).toBeCalledWith<[OnMoveParams]>({
      tiltAngleX: -60,
      tiltAngleY: -60,
      tiltAngleXPercentage: -100,
      tiltAngleYPercentage: -100,
      glareAngle: -45,
      glareOpacity: 1,
      eventType: 'mousemove',
    });
  });

  it('should calculate glare with default position', () => {
    const onMove = jest.fn();

    render(
      <TiltTest
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={-60}
        tiltAngleYManual={60}
        glareEnable={true}
        glareMaxOpacity={1}
        onMove={onMove}
      />,
    );

    userEvent.hover(screen.getByText('test'));

    expect(onMove).toBeCalledWith<[OnMoveParams]>({
      tiltAngleX: -60,
      tiltAngleY: 60,
      tiltAngleXPercentage: -100,
      tiltAngleYPercentage: 100,
      glareAngle: 45,
      glareOpacity: 0,
      eventType: 'mousemove',
    });
  });

  it('should calculate glare with flip vertically/horizontally enabled', () => {
    const onMove = jest.fn();

    render(
      <TiltTest
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={-60}
        tiltAngleYManual={60}
        glareEnable={true}
        glareMaxOpacity={1}
        glarePosition="top"
        onMove={onMove}
        flipVertically={true}
        flipHorizontally={true}
      />,
    );

    userEvent.hover(screen.getByText('test'));

    expect(onMove).toBeCalledWith<[OnMoveParams]>({
      tiltAngleX: 120,
      tiltAngleY: 120,
      tiltAngleXPercentage: 200,
      tiltAngleYPercentage: 200,
      glareAngle: 45,
      glareOpacity: 0,
      eventType: 'mousemove',
    });
  });
});
