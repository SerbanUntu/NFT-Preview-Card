function App() {

  return (
    <>
      <main className="bg-[--bg] w-screen h-screen text-base font-[300] text-[--soft-blue] flex justify-center items-center font-outlet">
        <article className="flex flex-col gap-5 bg-[--card] p-5 rounded-xl shadow-card">
          <section className="w-64 h-64 relative flex">
            <img className="w-full h-full rounded-lg hover:opacity-50" src="src/assets/image-equilibrium.jpg" alt="Equilibrium NFT" />
            <article className="w-full h-full rounded-lg absolute opacity-0 hover:opacity-100 transition-all duration-200 flex items-center justify-center cursor-pointer">
              <img className="z-10" src="src/assets/icon-view.svg" />
              <figure className="absolute w-full h-full rounded-lg bg-[--cyan] opacity-50" />
            </article>
          </section>
          <strong className="font-[600] text-white hover:text-[--cyan] text-xl cursor-pointer transition-all duration-200">Equilibrium #3429</strong>
          <p className="w-64">Our Equilibrium collection promotes balance and calm.</p>
          <section className="flex flex-row items-center justify-between">
            <article className="flex flex-row items-center gap-2 text-[--cyan]">
              <img className="h-fit" src="src/assets/icon-ethereum.svg" alt="Ethereum" />
              <p>0.041 ETH</p>
            </article>
            <article className="flex flex-row items-center gap-2">
              <img className="h-fit" src="src/assets/icon-clock.svg" alt="Time" />
              <p>3 days left</p>
            </article>
          </section>
          <figure className="h-px bg-[--line]" />
          <section className="flex flex-row gap-4 items-center">
            <img className="w-8 h-8 rounded-full border-white border-[1px]" src="/src/assets/image-avatar.png" alt="Author avatar" />
            <small>Creation of <span className="text-white hover:text-[--cyan] cursor-pointer transition-all duration-200">Jules Wyvern</span></small>
          </section>
        </article>
      </main>
    </>
  )
}

export default App
