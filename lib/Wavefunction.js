class GaussianWavefunction () {
  constructor(sigma, mu) {

  }

  wavefunction (x) {
    const mu = this.mu;
    const sigma = this.sigma;
    const wavefunctionConst = (2 / 3.1416)**(0.25);
    return (wavefunctionConst * Math.exp(-((x-mu)**2) / sigma**2) / Math.sqrt(sigma));
  }

  // TODO: fix one of these
  pdf (x) {
    const mu = this.mu;
    const sigma = this.sigma;
    const wavefunctionConst = (2 / 3.1416)**(0.25);
    return (wavefunctionConst * Math.exp(-((x-mu)**2) / sigma**2) / Math.sqrt(sigma));
  }

  kineticEnergyFunction (x) {
    // according to my Integrals for QM Demos notebook:
    // -sqrt(2)*(-sigma1**2 + 2*x**2)*exp(-2*x**2/sigma1**2)/(sqrt(pi)*sigma1**5)
    const mu = this.mu;
    const sigma = this.sigma;
    return (-Math.sqrt(2) * (-(sigma ** 2) + 2 * (x-mu)**2) *
      Math.exp(-2 * (x-mu)**2 / sigma**2) / (Math.sqrt(3.1415)*sigma**5);
  }

  potentialEnergyFunction (potential, x) {
    return 0.5 * this.pdf(x) ** 2
  }
}

GaussianWavefunction.NORMAL_SAMPLES = [
       -2.32634787, -2.03329754, -1.85186686, -1.71651724, -1.6068381,
       -1.51365896, -1.43203141, -1.35896619, -1.29251234, -1.23132256,
       -1.17442529, -1.12109555, -1.07077711, -1.02303323, -0.97751429,
       -0.93393567, -0.89206228, -0.85169747, -0.81267487, -0.77485226,
       -0.73810699, -0.70233237, -0.6674349 , -0.63333201, -0.59995035,
       -0.5672243 , -0.53509485, -0.50350859, -0.47241694, -0.44177548,
       -0.41154336, -0.38168284, -0.3521589 , -0.32293882, -0.29399196,
       -0.26528942, -0.23680382, -0.20850912, -0.18038041, -0.15239373,
       -0.12452592, -0.09675451, -0.06905754, -0.04141345, -0.01380098,
        0.01380098,  0.04141345,  0.06905754,  0.09675451,  0.12452592,
        0.15239373,  0.18038041,  0.20850912,  0.23680382,  0.26528942,
        0.29399196,  0.32293882,  0.3521589 ,  0.38168284,  0.41154336,
        0.44177548,  0.47241694,  0.50350859,  0.53509485,  0.5672243 ,
        0.59995035,  0.63333201,  0.6674349 ,  0.70233237,  0.73810699,
        0.77485226,  0.81267487,  0.85169747,  0.89206228,  0.93393567,
        0.97751429,  1.02303323,  1.07077711,  1.12109555,  1.17442529,
        1.23132256,  1.29251234,  1.35896619,  1.43203141,  1.51365896,
        1.6068381 ,  1.71651724,  1.85186686,  2.03329754,  2.32634787];

export default GaussianWavefunction;
