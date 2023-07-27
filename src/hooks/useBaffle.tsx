import baffle from 'baffle';

const useBaffle = (classNameSelector: string) => {
  const newBaffle = () => {
    const target = baffle(classNameSelector);
    target.set({
      // characters: '█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█<░▒ ▓/░>',
      characters: 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+{}|;:<>',
      speed: 100,
    });
    target.start();
    target.reveal(1000, 100);
    target.stop();
  };

  return { newBaffle };
};

export default useBaffle;
