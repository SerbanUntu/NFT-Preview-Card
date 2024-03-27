function App() {

  return (
    <>
      <main className="bg-[--bg] w-screen h-screen text-base font-[300] text-[--soft-blue] flex justify-center items-center font-outlet">
        <article className="flex flex-col gap-4 bg-[--card] p-[24px] rounded-xl shadow-card">
          <section className="w-[300px] h-[300px] relative flex">
            <img className="w-full h-full rounded-lg hover:opacity-50" src="/images/image-equilibrium.jpg" alt="Equilibrium NFT" />
            <article className="w-full h-full rounded-lg absolute opacity-0 hover:opacity-100 transition-all duration-200 bg-[--cyan-50] flex items-center justify-center cursor-pointer">
              <img className="z-10" src="/images/icon-view.svg" />
            </article>
          </section>
          <strong className="font-[600] text-white hover:text-[--cyan] text-[22px] cursor-pointer transition-all duration-200">Equilibrium #3429</strong>
          <p className="w-64">Our Equilibrium collection promotes balance and calm.</p>
          <section className="flex flex-row items-center justify-between">
            <article className="flex flex-row items-center gap-[8px] text-[--cyan]">
              <img className="h-fit" src="/images/icon-ethereum.svg" alt="Ethereum" />
              <p className="font-[600] text-add">0.041 ETH</p>
            </article>
            <article className="flex flex-row items-center gap-[8px]">
              <img className="h-fit" src="/images/icon-clock.svg" alt="Time left" />
              <p className="font-[400] text-add">3 days left</p>
            </article>
          </section>
          <figure className="h-px bg-[--line]" />
          <section className="flex flex-row gap-4 items-center mb-2">
            <img className="w-[32px] h-[32px] rounded-full border-white border-[1px]" src="/images/image-avatar.png" alt="Author avatar" />
            <small className="font-[400] text-add">Creation of <span className="text-white hover:text-[--cyan] cursor-pointer transition-all duration-200">Jules Wyvern</span></small>
          </section>
        </article>
      </main>
    </>
  )
}

export default App
