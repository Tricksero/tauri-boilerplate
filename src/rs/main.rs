#[tauri::command]
fn my_rust_function(arg: String) -> String {
    // Your Rust function logic here
    format!("Received argument: {}", arg)
}

use tauri::{Position, Window, WindowBuilder};

/// QOL function to open a window for debugging on the monitor you actually want it to open
fn move_window_to_other_monitor(window: &Window, i: usize) -> tauri::Result<()> {
    // Retrieve information about the available monitors and handle any errors.
    let monitors = window.available_monitors()?;
    // Retrieve the monitor at index `i` or return an error if it doesn't exist.
    let monitor = monitors.get(i).ok_or(tauri::Error::CreateWindow)?;
    // Retrieve the position of the selected monitor.
    let pos = monitor.position();
    // Set the position of the window to match the position of the selected monitor,
    // with the `y` coordinate set to `0` to align with the top of the monitor.
    window.set_position(Position::Physical(tauri::PhysicalPosition {
        x: pos.x,
        y: 0,
    }))?;
    // Center the window on the screen.
    window.center()?;
    // Return an empty result to indicate success.
    Ok(())
}

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let window =
                WindowBuilder::new(app, "Main", tauri::WindowUrl::App("index.html".into()))
                    .build()?;

            _ = move_window_to_other_monitor(&window, 0);

            Ok(())
        })
        .invoke_handler(tauri::generate_handler![my_rust_function])
        .run(tauri::generate_context!())
        .expect("unable to run Tauri application");
}
