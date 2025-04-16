export default function UnityFarms() {
  return (
    <main className="bg-yellow-50 text-black font-sans min-h-screen">
      <header className="p-6 bg-yellow-200 shadow-md flex justify-between items-center">
        <h1 className="text-3xl font-bold">Unity Farms</h1>
        <p className="italic text-sm">Where the eggs are fresh and the dog is in charge</p>
      </header>

      <section className="p-10 text-center">
        <h2 className="text-4xl font-semibold mb-4">Welcome to the Coop</h2>
        <p className="max-w-xl mx-auto">
          Unity Farms is an eco-friendly, animal-forward homestead offering fresh eggs, organic greenhouse produce,
          therapeutic animal interactions, and rustic event experiences. Come meet our chickens, get judged by our
          massive therapy dog, or host a party where lettuce and laughter grow side by side.
        </p>
      </section>

      <section className="bg-white py-10 px-6">
        <h3 className="text-2xl font-semibold text-center mb-6">What We Offer</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-yellow-100 p-4 rounded-xl shadow">
            <h4 className="font-bold text-xl mb-2">Farm-Fresh Eggs</h4>
            <p>Ethically raised, sunshine-fed hens laying the tastiest eggs east of the Mississippi.</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-xl shadow">
            <h4 className="font-bold text-xl mb-2">Greenhouse Goods</h4>
            <p>Organic herbs and vegetables grown with care and exactly zero bad vibes.</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-xl shadow">
            <h4 className="font-bold text-xl mb-2">Dog & Chicken Therapy</h4>
            <p>Feel your tension melt away under the gaze of a fluffy canine overlord—or the peck of a mindful hen.</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-xl shadow">
            <h4 className="font-bold text-xl mb-2">Farm Events & Parties</h4>
            <p>Book our land for birthdays, workshops, or spiritual awakenings disguised as barn dances.</p>
          </div>
        </div>
      </section>

      <section className="p-10 text-center bg-yellow-50">
        <h3 className="text-2xl font-semibold mb-4">Book a Visit</h3>
        <p className="mb-4">Use the form below to schedule a tour, therapy session, or event rental.</p>
        <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-semibold py-2 px-6 rounded-full">
          Schedule with Us
        </button>
      </section>

      <footer className="p-6 bg-yellow-200 text-center text-sm">
        <p>© {new Date().getFullYear()} Unity Farms. Sustainably grown. Emotionally complex.</p>
      </footer>
    </main>
  );
}
corrected App.js file
