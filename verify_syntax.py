#!/usr/bin/env python3
"""Simple syntax verification script for Python files in the project.
Iterates over all .py files under the project directory and attempts to
compile them using the built‑in `py_compile` module. Any syntax errors are
reported with the file name and the error message.
"""
import sys
import pathlib
import py_compile

def verify_file(path: pathlib.Path) -> bool:
    try:
        py_compile.compile(str(path), doraise=True)
        return True
    except py_compile.PyCompileError as e:
        print(f"Syntax error in {path}: {e.msg}")
        return False
    except Exception as e:
        print(f"Error processing {path}: {e}")
        return False

def main():
    root = pathlib.Path(__file__).parent
    py_files = list(root.rglob("*.py"))
    if not py_files:
        print("No Python files found to verify.")
        return
    all_ok = True
    for py_file in py_files:
        if not verify_file(py_file):
            all_ok = False
    if all_ok:
        print("All Python files passed syntax verification.")
    else:
        sys.exit(1)

if __name__ == "__main__":
    main()
